// app.js - implementações:
// - Modal admin com ARIA, trap focus, ESC e bloqueio de scroll
// - Admin login (local-first) com senha padrão 'gyn2026' (pode ser alterada no CMS)
// - CMS: salvar/recuperar hero, sobre, vertentes, equipamentos e redes sociais em localStorage
// - Atualizar DOM com valores salvos
// - Gerenciar preview de imagem com validação simples
// - Inserir comentários com textContent (evita innerHTML) e persistência localStorage

(() => {
  // Helpers
  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const storage = window.localStorage;

  // Default admin password (local-first). You can change it from CMS.
  const DEFAULT_ADMIN_PASSWORD = 'gyn2026';

  // IDs & elements
  const modal = qs('#modal-admin');
  const btnOpenAdmin = qs('#btn-open-admin');
  const btnCloseAdmin = qs('#btn-close-admin');
  const btnLogoutAdmin = qs('#btn-logout-admin');
  const adminLoginSection = qs('#admin-login-section');
  const adminMainSection = qs('#admin-main-section');
  const adminLoginForm = qs('#admin-login-form');
  const adminPasswordInput = qs('#admin-password');
  const loginErrorMsg = qs('#login-error-msg');
  const adminCmsForm = qs('#admin-cms-form');
  const imagePreviewBox = qs('#image-preview-box');
  const imagePreview = qs('#image-preview');
  const postImageFile = qs('#post-image-file');

  // Focus trap variables
  let lastFocusedElement = null;
  let focusableElements = [];
  let firstFocusable = null;
  let lastFocusable = null;

  // Utility: get saved admin password (plain text, local-first)
  function getSavedAdminPassword() {
    return storage.getItem('gyn_admin_password') || DEFAULT_ADMIN_PASSWORD;
  }
  function setSavedAdminPassword(pw) {
    if (typeof pw === 'string' && pw.length) {
      storage.setItem('gyn_admin_password', pw);
    }
  }

  // Modal open/close + focus trap + scroll lock
  function openModal() {
    lastFocusedElement = document.activeElement;
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // lock scroll

    // collect focusable elements inside modal
    focusableElements = Array.from(modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'))
      .filter(el => el.offsetParent !== null);
    firstFocusable = focusableElements[0] || modal;
    lastFocusable = focusableElements[focusableElements.length -1] || modal;

    // focus first interactive control
    if (firstFocusable) firstFocusable.focus();

    document.addEventListener('keydown', handleModalKeydown);
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // restore scroll
    document.removeEventListener('keydown', handleModalKeydown);
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function handleModalKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleLogoutOrClose();
    }
    if (e.key === 'Tab') {
      // focus trap
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }

  // Show admin main after successful login
  function showAdminMain() {
    adminLoginSection.style.display = 'none';
    adminMainSection.style.display = '';
    btnLogoutAdmin.style.display = '';
    // load CMS values into inputs
    loadCmsToForm();
  }

  // Logout: hide admin main, show login
  function handleLogoutOrClose() {
    adminLoginSection.style.display = '';
    adminMainSection.style.display = 'none';
    btnLogoutAdmin.style.display = 'none';
    closeModal();
  }

  // Admin login handler
  adminLoginForm && adminLoginForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const entered = adminPasswordInput.value || '';
    const saved = getSavedAdminPassword();
    if (entered === saved) {
      loginErrorMsg.style.display = 'none';
      openModal(); // ensure modal visible
      showAdminMain();
      adminPasswordInput.value = '';
    } else {
      loginErrorMsg.style.display = '';
    }
  });

  // Open modal button
  btnOpenAdmin && btnOpenAdmin.addEventListener('click', () => {
    openModal();
    // start on login form
    adminLoginSection.style.display = '';
    adminMainSection.style.display = 'none';
    btnLogoutAdmin.style.display = 'none';
    // focus password input
    setTimeout(() => qs('#admin-password')?.focus(), 50);
  });

  btnCloseAdmin && btnCloseAdmin.addEventListener('click', () => {
    handleLogoutOrClose();
  });

  btnLogoutAdmin && btnLogoutAdmin.addEventListener('click', () => {
    handleLogoutOrClose();
  });

  // If click outside modal content -> close
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      handleLogoutOrClose();
    }
  });

  // Setup admin tabs
  const adminTabs = qsa('.admin-tab-btn');
  adminTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      adminTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const paneId = btn.dataset.pane;
      qsa('.admin-pane').forEach(p => p.classList.remove('active'));
      qs('#' + paneId).classList.add('active');
    });
  });

  // Image upload preview + validation
  if (postImageFile) {
    postImageFile.addEventListener('change', () => {
      const file = postImageFile.files && postImageFile.files[0];
      if (!file) {
        imagePreviewBox.style.display = 'none';
        imagePreview.src = '';
        imagePreview.alt = '';
        return;
      }
      const MAX_BYTES = 3 * 1024 * 1024; // 3MB
      if (!file.type.startsWith('image/')) {
        alert('Por favor envie um arquivo de imagem.');
        postImageFile.value = '';
        return;
      }
      if (file.size > MAX_BYTES) {
        alert('Imagem muito grande. Máx 3MB.');
        postImageFile.value = '';
        return;
      }
      const url = URL.createObjectURL(file);
      imagePreview.src = url;
      imagePreview.alt = file.name;
      imagePreviewBox.style.display = '';
      // revoke objectURL later when replaced/cleared
      imagePreview.onload = () => URL.revokeObjectURL(url);
    });
  }

  // CMS persistence keys
  const CMS_KEY = 'gyn_cms';
  const EQUIP_KEY = 'gyn_equipment_brands';
  const SOCIAL_KEY = 'gyn_social_links';
  const FEED_KEY = 'gyn_feed';
  const COMMENTS_KEY = 'gyn_comments';

  function saveCms(data) {
    storage.setItem(CMS_KEY, JSON.stringify(data));
  }
  function loadCms() {
    const raw = storage.getItem(CMS_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch(e){ return null; }
  }

  function saveEquipment(arr) {
    storage.setItem(EQUIP_KEY, JSON.stringify(arr || []));
  }
  function loadEquipment() {
    const raw = storage.getItem(EQUIP_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw); } catch(e){ return []; }
  }

  function saveSocial(obj) {
    storage.setItem(SOCIAL_KEY, JSON.stringify(obj || {}));
  }
  function loadSocial() {
    const raw = storage.getItem(SOCIAL_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch(e){ return null; }
  }

  // Fill page from CMS
  function applyCmsToPage() {
    const cms = loadCms();
    if (!cms) return;
    if (cms.heroTitle) qs('#hero-title').textContent = cms.heroTitle;
    if (cms.heroSubtitle) qs('#hero-desc').textContent = cms.heroSubtitle;
    if (cms.sobreSub) qs('#sobre-sub').textContent = cms.sobreSub;
    if (cms.sobreHeader) qs('#sobre-header').textContent = cms.sobreHeader;
    if (cms.sobreContentTitle) qs('#sobre-content-title').textContent = cms.sobreContentTitle;
    if (cms.sobreP1) qs('#sobre-p1').textContent = cms.sobreP1;
    if (cms.sobreP2) qs('#sobre-p2').textContent = cms.sobreP2;
    if (cms.sobreFeat1Title) qs('#sobre-feat1-title').textContent = cms.sobreFeat1Title;
    if (cms.sobreFeat1Desc) qs('#sobre-feat1-desc').textContent = cms.sobreFeat1Desc;
    if (cms.sobreFeat2Title) qs('#sobre-feat2-title').textContent = cms.sobreFeat2Title;
    if (cms.sobreFeat2Desc) qs('#sobre-feat2-desc').textContent = cms.sobreFeat2Desc;
    if (cms.sobreImgTitle) qs('#sobre-img-title').textContent = cms.sobreImgTitle;
    if (cms.sobreImgDesc) qs('#sobre-img-desc').textContent = cms.sobreImgDesc;

    // vertentes (if available): render simple blocks
    const vertentesContainer = qs('#vertentes-container');
    if (cms.vertentes && Array.isArray(cms.vertentes)) {
      vertentesContainer.innerHTML = '';
      cms.vertentes.forEach(v => {
        const item = document.createElement('div');
        item.className = 'service-card';
        item.innerHTML = `<div class="service-icon">${escapeText(v.icon || '')}</div><h4>${escapeText(v.title || '')}</h4><p>${escapeText(v.desc || '')}</p>`;
        vertentesContainer.appendChild(item);
      });
    }

    // equipment
    renderEquipmentList();

    // social links
    applySocialToFooter();
  }

  // Fill CMS form fields from storage
  function loadCmsToForm() {
    const cms = loadCms() || {};
    qs('#cms-hero-title').value = cms.heroTitle || qs('#hero-title').textContent || '';
    qs('#cms-hero-subtitle').value = cms.heroSubtitle || qs('#hero-desc').textContent || '';
    qs('#cms-sobre-sub').value = cms.sobreSub || qs('#sobre-sub').textContent || '';
    qs('#cms-sobre-title').value = cms.sobreHeader || qs('#sobre-header').textContent || '';
    qs('#cms-sobre-content-title').value = cms.sobreContentTitle || qs('#sobre-content-title').textContent || '';
    qs('#cms-sobre-p1').value = cms.sobreP1 || qs('#sobre-p1').textContent || '';
    qs('#cms-sobre-p2').value = cms.sobreP2 || qs('#sobre-p2').textContent || '';
    qs('#cms-sobre-feat1-title').value = cms.sobreFeat1Title || qs('#sobre-feat1-title').textContent || '';
    qs('#cms-sobre-feat1-desc').value = cms.sobreFeat1Desc || qs('#sobre-feat1-desc').textContent || '';
    qs('#cms-sobre-feat2-title').value = cms.sobreFeat2Title || qs('#sobre-feat2-title').textContent || '';
    qs('#cms-sobre-feat2-desc').value = cms.sobreFeat2Desc || qs('#sobre-feat2-desc').textContent || '';
    qs('#cms-sobre-img-title').value = cms.sobreImgTitle || qs('#sobre-img-title').textContent || '';
    qs('#cms-sobre-img-desc').value = cms.sobreImgDesc || qs('#sobre-img-desc').textContent || '';

    // vertentes: if exist, fill basic ones
    if (cms.vertentes && Array.isArray(cms.vertentes)) {
      qs('#cms-vert1-icon').value = (cms.vertentes[0] && cms.vertentes[0].icon) || '';
      qs('#cms-vert1-title').value = (cms.vertentes[0] && cms.vertentes[0].title) || '';
      qs('#cms-vert1-desc').value = (cms.vertentes[0] && cms.vertentes[0].desc) || '';
      qs('#cms-vert2-icon').value = (cms.vertentes[1] && cms.vertentes[1].icon) || '';
      qs('#cms-vert2-title').value = (cms.vertentes[1] && cms.vertentes[1].title) || '';
      qs('#cms-vert2-desc').value = (cms.vertentes[1] && cms.vertentes[1].desc) || '';
      qs('#cms-vert3-icon').value = (cms.vertentes[2] && cms.vertentes[2].icon) || '';
      qs('#cms-vert3-title').value = (cms.vertentes[2] && cms.vertentes[2].title) || '';
      qs('#cms-vert3-desc').value = (cms.vertentes[2] && cms.vertentes[2].desc) || '';
    }

    // equipment
    const equips = loadEquipment();
    for (let i = 1; i <= 6; i++) {
      const el = qs('#cms-equip-' + i);
      if (el) el.value = equips[i-1] || '';
    }

    // social
    const social = loadSocial() || {};
    qs('#cms-social-youtube').value = social.youtube || '';
    qs('#cms-social-instagram').value = social.instagram || '';
    qs('#cms-social-tiktok').value = social.tiktok || '';
    qs('#cms-social-facebook').value = social.facebook || '';
    qs('#cms-social-x').value = social.x || '';
  }

  // Escape text for insertion into innerHTML when used (small utility)
  function escapeText(s) {
    if (!s && s !== 0) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Render equipment list from storage
  function renderEquipmentList() {
    const container = qs('#equipment-list');
    container.innerHTML = '';
    const equips = loadEquipment();
    if (!equips || equips.length === 0) {
      container.innerHTML = '<p style="color:var(--silver-secondary)">Nenhuma marca cadastrada. Use o Painel Administrativo → Editar Páginas do Site → Equipamentos.</p>';
      return;
    }
    equips.forEach((brand) => {
      if (!brand) return;
      const item = document.createElement('div');
      item.className = 'equipment-item';
      item.textContent = brand;
      container.appendChild(item);
    });
  }

  // Apply social links to footer anchors
  function applySocialToFooter() {
    const s = loadSocial() || {};
    const maps = [
      ['youtube', 'footer-youtube'],
      ['instagram', 'footer-instagram'],
      ['tiktok', 'footer-tiktok'],
      ['facebook', 'footer-facebook'],
      ['x', 'footer-x'],
    ];
    maps.forEach(([key, id]) => {
      const el = qs('#' + id);
      if (!el) return;
      if (s[key]) {
        el.href = s[key];
        el.setAttribute('target','_blank');
        el.setAttribute('rel','noopener noreferrer');
      } else {
        // If empty, keep default or disable
        el.href = '#';
        el.removeAttribute('target');
        el.removeAttribute('rel');
      }
    });
  }

  // Handle CMS save
  adminCmsForm && adminCmsForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // gather fields
    const cms = {
      heroTitle: qs('#cms-hero-title').value.trim(),
      heroSubtitle: qs('#cms-hero-subtitle').value.trim(),
      sobreSub: qs('#cms-sobre-sub').value.trim(),
      sobreHeader: qs('#cms-sobre-title').value.trim(),
      sobreContentTitle: qs('#cms-sobre-content-title').value.trim(),
      sobreP1: qs('#cms-sobre-p1').value.trim(),
      sobreP2: qs('#cms-sobre-p2').value.trim(),
      sobreFeat1Title: qs('#cms-sobre-feat1-title').value.trim(),
      sobreFeat1Desc: qs('#cms-sobre-feat1-desc').value.trim(),
      sobreFeat2Title: qs('#cms-sobre-feat2-title').value.trim(),
      sobreFeat2Desc: qs('#cms-sobre-feat2-desc').value.trim(),
      sobreImgTitle: qs('#cms-sobre-img-title').value.trim(),
      sobreImgDesc: qs('#cms-sobre-img-desc').value.trim(),
      vertentes: [
        { icon: qs('#cms-vert1-icon').value.trim(), title: qs('#cms-vert1-title').value.trim(), desc: qs('#cms-vert1-desc').value.trim() },
        { icon: qs('#cms-vert2-icon').value.trim(), title: qs('#cms-vert2-title').value.trim(), desc: qs('#cms-vert2-desc').value.trim() },
        { icon: qs('#cms-vert3-icon').value.trim(), title: qs('#cms-vert3-title').value.trim(), desc: qs('#cms-vert3-desc').value.trim() },
      ]
    };
    saveCms(cms);

    // equipment
    const equips = [];
    for (let i = 1; i <= 6; i++) {
      const v = qs('#cms-equip-' + i).value.trim();
      if (v) equips.push(v);
    }
    saveEquipment(equips);

    // social
    const social = {
      youtube: qs('#cms-social-youtube').value.trim(),
      instagram: qs('#cms-social-instagram').value.trim(),
      tiktok: qs('#cms-social-tiktok').value.trim(),
      facebook: qs('#cms-social-facebook').value.trim(),
      x: qs('#cms-social-x').value.trim(),
    };
    saveSocial(social);

    // admin password change (local)
    const newPass = qs('#cms-admin-newpass').value;
    if (newPass && newPass.trim().length >= 4) {
      setSavedAdminPassword(newPass.trim());
      qs('#cms-admin-newpass').value = '';
      // reflect logout as precaution
      alert('Senha atualizada (local). Você será deslogado e deverá usar a nova senha no próximo acesso.');
      handleLogoutOrClose();
    } else {
      // apply changes to page without logging out
      applyCmsToPage();
      applySocialToFooter();
      renderEquipmentList();
      showToast('Alterações salvas');
    }
  });

  // Simple toast
  function showToast(msg = 'Ação concluída') {
    const t = qs('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

  // Comments handling (simple local-first)
  const commentForm = qs('#comment-form');
  const commentsListContainer = qs('#comments-list-container');

  function loadComments() {
    const raw = storage.getItem(COMMENTS_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw); } catch(e) { return []; }
  }
  function saveComments(arr) {
    storage.setItem(COMMENTS_KEY, JSON.stringify(arr || []));
  }
  function renderComments() {
    const comments = loadComments();
    commentsListContainer.innerHTML = '';
    if (comments.length === 0) {
      commentsListContainer.innerHTML = '<p style="color:var(--silver-secondary)">Seja o primeiro a comentar.</p>';
      return;
    }
    comments.forEach(c => {
      const card = document.createElement('div');
      card.className = 'comment-card';
      const name = document.createElement('strong');
      name.textContent = `${c.name} — ${c.role}`;
      const msg = document.createElement('p');
      msg.textContent = c.message;
      card.appendChild(name);
      card.appendChild(msg);
      commentsListContainer.appendChild(card);
    });
  }

  commentForm && commentForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = qs('#comment-name').value.trim();
    const role = qs('#comment-role').value.trim();
    const message = qs('#comment-message').value.trim();
    if (!name || !message) return;
    const comments = loadComments();
    comments.unshift({ name, role, message, createdAt: new Date().toISOString() });
    saveComments(comments);
    commentForm.reset();
    renderComments();
    showToast('Comentário enviado');
  });

  // Initialize page
  function init() {
    // apply CMS content to page
    applyCmsToPage();
    renderComments();

    // load social links
    applySocialToFooter();

    // accessibility: ensure buttons that are not submit have type set (already in HTML)
  }

  // Run init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', init);

})();
