// ==========================================
// BANCO DE DADOS LOCAL INICIAL (MOCK DATA)
// ==========================================

const INITIAL_FEED = [
    {
        id: "feed-1",
        title: "Gigante do Rio Negro - Tucunaré-Açu",
        type: "foto",
        mediaUrl: "assets/amazon.png",
        desc: "Capturado na região de Barcelos - AM. Peixe de 84cm de comprimento, isca de hélice de 14cm. Luta incrível de quase 15 minutos.",
        date: "2026-06-15"
    },
    {
        id: "feed-2",
        title: "Piraíba de 1.95 metros no Araguaia",
        type: "foto",
        mediaUrl: "assets/araguaia.png",
        desc: "Uma das maiores capturas da temporada em Luiz Alves - GO. Piraíba fisgada em poço profundo de 18 metros usando tuvira como isca.",
        date: "2026-05-20"
    },
    {
        id: "feed-3",
        title: "Aventura e Técnicas em Serra da Mesa",
        type: "video",
        mediaUrl: "assets/serra_mesa.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        desc: "Gravação especial demonstrando técnicas avançadas de arremesso com carretilha de alta velocidade e capturas espetaculares de Tucunarés Azuis.",
        date: "2026-06-01"
    }
];

const INITIAL_COMMENTS = [
    {
        id: "comment-1",
        name: "Carlos Eduardo",
        role: "Goiânia - GO",
        message: "Sensacional a estrutura da GynFishing! A vara customizada de 17lb de carbono que adquiri com a curadoria deles é de outro planeta. Extrema sensibilidade e muito leve.",
        date: "2026-06-21"
    },
    {
        id: "comment-2",
        name: "Marcos Rezende",
        role: "Uberlândia - MG",
        message: "O roteiro de expedição para a Amazônia foi impecável. Do transfer em Manaus até os pontos de pesca, tudo planejado milimetricamente. Peguei meu recorde pessoal lá!",
        date: "2026-06-18"
    },
    {
        id: "comment-3",
        name: "Letícia Santos",
        role: "Palmas - TO",
        message: "O que mais me impressiona na marca é o respeito e incentivo ao pesque e solte. Praticar a pesca esportiva preservando a natureza garante o futuro dos nossos rios. Parabéns pelo posicionamento!",
        date: "2026-06-12"
    }
];

// MARCAS PARCEIRAS INICIAIS (EXPANDIDO PARA 10+)
const INITIAL_BRANDS = [
    { id: "brand-1", name: "Shimano", logo: "assets/brands/shimano.png", category: "Carretilhas & Varas" },
    { id: "brand-2", name: "Abu Garcia", logo: "assets/brands/abu-garcia.png", category: "Reels Premium" },
    { id: "brand-3", name: "Berkley", logo: "assets/brands/berkley.png", category: "Linhas & Iscas" },
    { id: "brand-4", name: "Rapala", logo: "assets/brands/rapala.png", category: "Iscas Artificiais" },
    { id: "brand-5", name: "Penn", logo: "assets/brands/penn.png", category: "Equipamentos" },
    { id: "brand-6", name: "Daiwa", logo: "assets/brands/daiwa.png", category: "Carretilhas" },
    { id: "brand-7", name: "Ugly Stik", logo: "assets/brands/ugly-stik.png", category: "Varas Profissionais" },
    { id: "brand-8", name: "Spro", logo: "assets/brands/spro.png", category: "Iscas Inovadoras" },
    { id: "brand-9", name: "Storm", logo: "assets/brands/storm.png", category: "Köder de Elite" },
    { id: "brand-10", name: "Mustad", logo: "assets/brands/mustad.png", category: "Anzóis Certificados" }
];

// Conteúdos de Texto Editáveis do Site (Hero, Sobre, e Vertentes)
const INITIAL_TEXTS = {
    hero: {
        title: "GYN FISHING",
        subtitle: "A evolução da pesca esportiva. Técnica avançada, equipamentos de alta precisão e roteiros exclusivos sob uma ótica contemporânea e sofisticada."
    },
    sobre: {
        header_sub: "Conheça nossa essência",
        header_title: "A Marca GynFishing",
        content_title: "Uma perspectiva mineral de alta performance",
        p1: "Nascida do desejo de elevar a experiência da pesca esportiva no Brasil, a GynFishing une paixão, sofisticação e precisão técnica. Nosso foco é oferecer caminhos para o pescador que busca alta performance, durabilidade e respeito máximo à biodiversidade dos nossos rios e lagos.",
        p2: "Valorizamos o esporte consciente. Praticamos e incentivamos o pesque e solte, garantindo a preservação das espécies gigantes brasileiras e promovendo a cultura da pesca responsável e ecológica.",
        feat1_title: "Equipamentos Custom",
        feat1_desc: "Varas sob medida para sua pescaria.",
        feat2_title: "Roteiros Secretos",
        feat2_desc: "Locais mapeados de alta produtividade.",
        img_title: "Serra da Mesa, GO",
        img_desc: "Pesca esportiva de Tucunarés Azuis gigantes."
    },
    vertentes: [
        {
            icon: "⚡",
            title: "Equipamentos High-End",
            desc: "Curadoria rigorosa de carretilhas, linhas de última geração e varas customizadas projetadas para a máxima resistência e sensibilidade tátil."
        },
        {
            icon: "🗺️",
            title: "Expedições & Roteiros",
            desc: "Planejamento de alto padrão e logística estratégica para pescarias inesquecíveis nos rios mais produtivos do cenário nacional e internacional."
        },
        {
            icon: "🎬",
            title: "Engajamento & Mídia",
            desc: "Produção audiovisual detalhada das expedições, técnicas avançadas de arremesso de iscas artificiais e fomento à cultura esportiva de preservação."
        }
    ]
};

// ==========================================
// INICIALIZAÇÃO DO LOCALSTORAGE
// ==========================================

let dbFeed = JSON.parse(localStorage.getItem('gynfishing_feed'));
let dbComments = JSON.parse(localStorage.getItem('gynfishing_comments'));
let dbTexts = JSON.parse(localStorage.getItem('gynfishing_texts'));
let dbBrands = JSON.parse(localStorage.getItem('gynfishing_brands'));

if (!dbFeed) {
    dbFeed = INITIAL_FEED;
    localStorage.setItem('gynfishing_feed', JSON.stringify(dbFeed));
}
if (!dbComments) {
    dbComments = INITIAL_COMMENTS;
    localStorage.setItem('gynfishing_comments', JSON.stringify(dbComments));
}
if (!dbTexts) {
    dbTexts = INITIAL_TEXTS;
    localStorage.setItem('gynfishing_texts', JSON.stringify(dbTexts));
}
if (!dbBrands) {
    dbBrands = INITIAL_BRANDS;
    localStorage.setItem('gynfishing_brands', JSON.stringify(dbBrands));
}

// Buffer temporário para carregar imagem local em Base64
let uploadedImageBase64 = "";
let uploadedBrandLogoBase64 = "";

// ==========================================
// FUNÇÕES DE SEGURANÇA E SANITIZAÇÃO
// ==========================================

function sanitizeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function validateUrl(url) {
    try {
        if (!url) return false;
        const urlObj = new URL(url);
        return urlObj.protocol === 'https:' || urlObj.protocol === 'http:';
    } catch (e) {
        return false;
    }
}

function validateImageFile(file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!allowedTypes.includes(file.type)) {
        return { valid: false, error: "Apenas JPEG, PNG e WebP são permitidos." };
    }
    if (file.size > maxSize) {
        return { valid: false, error: "Arquivo muito grande (máximo 5MB)." };
    }
    return { valid: true };
}

// ==========================================
// ELEMENTOS DOM - SEÇÕES PÚBLICAS
// ==========================================

const galleryContainer = document.getElementById('gallery-container');
const commentsContainer = document.getElementById('comments-list-container');
const brandsContainer = document.getElementById('brands-container');
const commentForm = document.getElementById('comment-form');
const toast = document.getElementById('toast');

// Controles de layout e navegação
const header = document.getElementById('header');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// ==========================================
// ELEMENTOS DOM - CONTROLES DO MODAL ADMIN
// ==========================================

const btnOpenAdmin = document.getElementById('btn-open-admin');
const btnCloseAdmin = document.getElementById('btn-close-admin');
const modalAdmin = document.getElementById('modal-admin');
const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
const adminPanes = document.querySelectorAll('.admin-pane');

// Seções internas do modal admin
const adminLoginSection = document.getElementById('admin-login-section');
const adminMainSection = document.getElementById('admin-main-section');
const adminLoginForm = document.getElementById('admin-login-form');
const adminPasswordInput = document.getElementById('admin-password');
const loginErrorMsg = document.getElementById('login-error-msg');
const btnLogoutAdmin = document.getElementById('btn-logout-admin');

// Senha mestra do Administrador (usar variável de ambiente em produção)
const ADMIN_PASSWORD = "gynfishing123";

// ==========================================
// ELEMENTOS DOM - CADASTRO DE PUBLICAÇÕES
// ==========================================

const adminAddForm = document.getElementById('admin-add-form');
const postTitle = document.getElementById('post-title');
const postType = document.getElementById('post-type');
const postVideoUrl = document.getElementById('post-video-url');
const postImageFile = document.getElementById('post-image-file');
const postDesc = document.getElementById('post-desc');
const videoUrlGroup = document.getElementById('video-url-group');
const imageUploadGroup = document.getElementById('image-upload-group');
const imagePreviewBox = document.getElementById('image-preview-box');
const imagePreview = document.getElementById('image-preview');

// Tabelas de Gerenciamento do Admin
const adminFeedTableBody = document.getElementById('admin-feed-table-body');
const adminCommentsTableBody = document.getElementById('admin-comments-table-body');
const adminBrandsTableBody = document.getElementById('admin-brands-table-body');

// ==========================================
// ELEMENTOS DOM - CADASTRO DE MARCAS
// ==========================================

const adminBrandForm = document.getElementById('admin-brand-form');
const brandName = document.getElementById('brand-name');
const brandCategory = document.getElementById('brand-category');
const brandLogoFile = document.getElementById('brand-logo-file');
const brandLogoPreviewBox = document.getElementById('brand-logo-preview-box');
const brandLogoPreview = document.getElementById('brand-logo-preview');

// ==========================================
// ELEMENTOS DOM - EDIÇÃO CMS (TEXTOS E CARD)
// ==========================================

const adminCmsForm = document.getElementById('admin-cms-form');
const cmsHeroTitle = document.getElementById('cms-hero-title');
const cmsHeroSubtitle = document.getElementById('cms-hero-subtitle');
const cmsSobreSub = document.getElementById('cms-sobre-sub');
const cmsSobreTitle = document.getElementById('cms-sobre-title');
const cmsSobreContentTitle = document.getElementById('cms-sobre-content-title');
const cmsSobreP1 = document.getElementById('cms-sobre-p1');
const cmsSobreP2 = document.getElementById('cms-sobre-p2');
const cmsSobreFeat1Title = document.getElementById('cms-sobre-feat1-title');
const cmsSobreFeat1Desc = document.getElementById('cms-sobre-feat1-desc');
const cmsSobreFeat2Title = document.getElementById('cms-sobre-feat2-title');
const cmsSobreFeat2Desc = document.getElementById('cms-sobre-feat2-desc');
const cmsSobreImgTitle = document.getElementById('cms-sobre-img-title');
const cmsSobreImgDesc = document.getElementById('cms-sobre-img-desc');

const cmsVert1Icon = document.getElementById('cms-vert1-icon');
const cmsVert1Title = document.getElementById('cms-vert1-title');
const cmsVert1Desc = document.getElementById('cms-vert1-desc');
const cmsVert2Icon = document.getElementById('cms-vert2-icon');
const cmsVert2Title = document.getElementById('cms-vert2-title');
const cmsVert2Desc = document.getElementById('cms-vert2-desc');
const cmsVert3Icon = document.getElementById('cms-vert3-icon');
const cmsVert3Title = document.getElementById('cms-vert3-title');
const cmsVert3Desc = document.getElementById('cms-vert3-desc');

// ==========================================
// ELEMENTOS DOM - MODAL PLAYER DE VÍDEO
// ==========================================

const modalVideo = document.getElementById('modal-video');
const btnCloseVideo = document.getElementById('btn-close-video');
const videoPlayerTarget = document.getElementById('video-player-target');

// ==========================================
// 1. EFEITO SCROLL HEADER & FADE-IN ANIMATION
// ==========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    revealElements();
});

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}
revealElements();

// ==========================================
// 2. MENU HAMBÚRGUER MOBILE
// ==========================================

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// 3. RENDERIZAÇÃO DOS TEXTOS DINÂMICOS (CMS)
// ==========================================

function renderSiteTexts() {
    document.getElementById('hero-title').textContent = sanitizeHtml(dbTexts.hero.title);
    document.getElementById('hero-desc').textContent = sanitizeHtml(dbTexts.hero.subtitle);

    document.getElementById('sobre-sub').textContent = sanitizeHtml(dbTexts.sobre.header_sub);
    document.getElementById('sobre-header').textContent = sanitizeHtml(dbTexts.sobre.header_title);
    document.getElementById('sobre-content-title').textContent = sanitizeHtml(dbTexts.sobre.content_title);
    document.getElementById('sobre-p1').textContent = sanitizeHtml(dbTexts.sobre.p1);
    document.getElementById('sobre-p2').textContent = sanitizeHtml(dbTexts.sobre.p2);
    document.getElementById('sobre-feat1-title').textContent = sanitizeHtml(dbTexts.sobre.feat1_title);
    document.getElementById('sobre-feat1-desc').textContent = sanitizeHtml(dbTexts.sobre.feat1_desc);
    document.getElementById('sobre-feat2-title').textContent = sanitizeHtml(dbTexts.sobre.feat2_title);
    document.getElementById('sobre-feat2-desc').textContent = sanitizeHtml(dbTexts.sobre.feat2_desc);
    document.getElementById('sobre-img-title').textContent = sanitizeHtml(dbTexts.sobre.img_title);
    document.getElementById('sobre-img-desc').textContent = sanitizeHtml(dbTexts.sobre.img_desc);

    const vertentesContainer = document.getElementById('vertentes-container');
    vertentesContainer.innerHTML = '';
    
    dbTexts.vertentes.forEach(vert => {
        const card = document.createElement('div');
        card.className = 'card-service';
        card.innerHTML = `
            <div class="card-icon">${sanitizeHtml(vert.icon)}</div>
            <h3>${sanitizeHtml(vert.title)}</h3>
            <p>${sanitizeHtml(vert.desc)}</p>
        `;
        vertentesContainer.appendChild(card);
    });
}

// ==========================================
// 4. NOTIFICAÇÃO TOAST
// ==========================================

function showToast(message, isError = false) {
    toast.textContent = sanitizeHtml(message);
    toast.style.background = isError ? '#dc3545' : '#198754';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==========================================
// 5. RENDERIZAÇÃO DO FEED PÚBLICO (GALERIA)
// ==========================================

function renderPublicFeed(filter = 'all') {
    galleryContainer.innerHTML = '';
    
    const filteredFeed = dbFeed.filter(item => {
        if (filter === 'all') return true;
        return item.type === filter;
    });

    if (filteredFeed.length === 0) {
        galleryContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--silver-dark);">
                <p>Nenhuma publicação encontrada nesta categoria.</p>
            </div>
        `;
        return;
    }

    filteredFeed.forEach(item => {
        const isVideo = item.type === 'video';
        const card = document.createElement('div');
        card.className = 'gallery-card';
        
        const mediaUrl = validateUrl(item.mediaUrl) ? item.mediaUrl : 'assets/serra_mesa.png';
        const altText = sanitizeHtml(item.title);
        const title = sanitizeHtml(item.title);
        const desc = sanitizeHtml(item.desc);
        const typeLabel = item.type === 'foto' ? 'Foto' : 'Vídeo';
        
        card.innerHTML = `
            <div class="gallery-media-container">
                <img src="${mediaUrl}" alt="${altText}" loading="lazy">
                ${isVideo ? `
                    <div class="video-play-overlay" data-video-url="${sanitizeHtml(item.videoUrl)}">
                        <div class="play-icon"></div>
                    </div>
                ` : ''}
            </div>
            <div class="gallery-info">
                <div>
                    <span class="gallery-tag">${typeLabel}</span>
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
                <div class="gallery-date">${formatDate(item.date)}</div>
            </div>
        `;
        galleryContainer.appendChild(card);
    });
}

// ==========================================
// 6. RENDERIZAÇÃO DOS COMENTÁRIOS PÚBLICOS
// ==========================================

function renderPublicComments() {
    commentsContainer.innerHTML = '';
    
    if (dbComments.length === 0) {
        commentsContainer.innerHTML = `
            <p style="text-align: center; color: var(--silver-dark); padding: 2rem;">Seja o primeiro a deixar um relato sobre a GynFishing!</p>
        `;
        return;
    }

    dbComments.forEach(comment => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        const initial = sanitizeHtml(comment.name.charAt(0).toUpperCase());
        const name = sanitizeHtml(comment.name);
        const role = sanitizeHtml(comment.role);
        const message = sanitizeHtml(comment.message);

        card.innerHTML = `
            <div class="comment-header">
                <div class="comment-author-info">
                    <div class="comment-avatar">${initial}</div>
                    <div>
                        <div class="comment-author">${name}</div>
                        <div class="comment-role">${role}</div>
                    </div>
                </div>
                <div class="comment-date">${formatDate(comment.date)}</div>
            </div>
            <p class="comment-body">${message}</p>
        `;
        commentsContainer.appendChild(card);
    });
}

// ==========================================
// 7. RENDERIZAÇÃO DAS MARCAS PARCEIRAS
// ==========================================

function renderPublicBrands() {
    if (!brandsContainer) return;
    
    brandsContainer.innerHTML = '';
    
    if (dbBrands.length === 0) {
        brandsContainer.innerHTML = `
            <p style="text-align: center; color: var(--silver-dark); padding: 2rem; grid-column: 1/-1;">Marcas parceiras em breve!</p>
        `;
        return;
    }

    dbBrands.forEach(brand => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        const logoUrl = validateUrl(brand.logo) ? brand.logo : 'assets/placeholder-brand.png';
        const brandName = sanitizeHtml(brand.name);
        const category = sanitizeHtml(brand.category);

        card.innerHTML = `
            <div class="brand-logo-container">
                <img src="${logoUrl}" alt="${brandName}" loading="lazy">
            </div>
            <div class="brand-info">
                <h4>${brandName}</h4>
                <p>${category}</p>
            </div>
        `;
        brandsContainer.appendChild(card);
    });
}

// Filtro da Galeria (Abas)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filterValue = e.target.getAttribute('data-filter');
        renderPublicFeed(filterValue);
    });
});

// Evento de vídeo com Event Delegation (XSS seguro)
document.addEventListener('click', (e) => {
    if (e.target.closest('.video-play-overlay')) {
        const videoUrl = e.target.closest('.video-play-overlay').dataset.videoUrl;
        if (validateUrl(videoUrl) || videoUrl.includes('youtube')) {
            playVideo(videoUrl);
        }
    }
});

// Enviar Comentário Público
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value.trim();
    const role = document.getElementById('comment-role').value.trim();
    const message = document.getElementById('comment-message').value.trim();

    if (!name || !role || !message) {
        showToast("Por favor, preencha todos os campos.", true);
        return;
    }

    if (name.length > 100 || role.length > 100 || message.length > 1000) {
        showToast("Campos excedem o tamanho máximo permitido.", true);
        return;
    }

    const newComment = {
        id: 'comment-' + Date.now(),
        name: sanitizeHtml(name),
        role: sanitizeHtml(role),
        message: sanitizeHtml(message),
        date: new Date().toISOString().split('T')[0]
    };

    dbComments.unshift(newComment);
    localStorage.setItem('gynfishing_comments', JSON.stringify(dbComments));

    commentForm.reset();
    renderPublicComments();
    showToast("Comentário enviado com sucesso!");
});

// ==========================================
// 8. AUTENTICAÇÃO DO MODAL ADMIN
// ==========================================

function checkAuthStatus() {
    const isAuthenticated = sessionStorage.getItem('gynfishing_authenticated') === 'true';
    if (isAuthenticated) {
        adminLoginSection.style.display = 'none';
        adminMainSection.style.display = 'block';
        btnLogoutAdmin.style.display = 'block';
    } else {
        adminLoginSection.style.display = 'block';
        adminMainSection.style.display = 'none';
        btnLogoutAdmin.style.display = 'none';
    }
}

adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredPassword = adminPasswordInput.value;
    
    if (enteredPassword === ADMIN_PASSWORD) {
        sessionStorage.setItem('gynfishing_authenticated', 'true');
        loginErrorMsg.style.display = 'none';
        adminPasswordInput.value = '';
        checkAuthStatus();
        showToast("Acesso concedido!");
    } else {
        loginErrorMsg.style.display = 'block';
        adminPasswordInput.value = '';
        setTimeout(() => {
            loginErrorMsg.style.display = 'none';
        }, 3000);
    }
});

btnLogoutAdmin.addEventListener('click', () => {
    sessionStorage.removeItem('gynfishing_authenticated');
    checkAuthStatus();
    showToast("Você saiu do painel.");
});

btnOpenAdmin.addEventListener('click', () => {
    modalAdmin.classList.add('active');
    document.body.style.overflow = 'hidden';
    checkAuthStatus();
    renderAdminTables();
    populateCmsInputs();
});

btnCloseAdmin.addEventListener('click', closeAdminModal);
modalAdmin.addEventListener('click', (e) => {
    if (e.target === modalAdmin) closeAdminModal();
});

function closeAdminModal() {
    modalAdmin.classList.remove('active');
    document.body.style.overflow = 'auto';
}

adminTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        adminTabBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const targetPaneId = e.target.getAttribute('data-pane');
        adminPanes.forEach(pane => {
            if (pane.id === targetPaneId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
    });
});

// ==========================================
// 9. CADASTRO DE PUBLICAÇÕES (ADMIN)
// ==========================================

postType.addEventListener('change', () => {
    if (postType.value === 'video') {
        videoUrlGroup.style.display = 'block';
        imageUploadGroup.style.display = 'block';
        postVideoUrl.setAttribute('required', 'true');
    } else {
        videoUrlGroup.style.display = 'none';
        imageUploadGroup.style.display = 'block';
        postVideoUrl.removeAttribute('required');
    }
});

postImageFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const validation = validateImageFile(file);
        if (!validation.valid) {
            showToast(validation.error, true);
            postImageFile.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedImageBase64 = event.target.result;
            imagePreview.src = uploadedImageBase64;
            imagePreviewBox.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

function parseVideoUrl(url) {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
}

adminAddForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = postTitle.value.trim();
    const type = postType.value;
    const rawVideoUrl = postVideoUrl.value.trim();
    const desc = postDesc.value.trim();

    if (!title || !desc) {
        showToast("Preencha todos os campos obrigatórios.", true);
        return;
    }

    if (title.length > 200 || desc.length > 1000) {
        showToast("Campos excedem o tamanho máximo permitido.", true);
        return;
    }

    let finalMediaUrl = "assets/serra_mesa.png";
    let finalVideoUrl = "";

    if (type === 'video') {
        finalVideoUrl = parseVideoUrl(rawVideoUrl);
        if (!finalVideoUrl || !finalVideoUrl.includes('youtube')) {
            showToast("URL de vídeo inválida.", true);
            return;
        }
        if (uploadedImageBase64) {
            finalMediaUrl = uploadedImageBase64;
        } else {
            finalMediaUrl = "assets/serra_mesa.png";
        }
    } else {
        if (!uploadedImageBase64) {
            showToast("Selecione um arquivo de imagem local.", true);
            return;
        }
        finalMediaUrl = uploadedImageBase64;
    }

    const newPost = {
        id: 'feed-' + Date.now(),
        title: sanitizeHtml(title),
        type: type,
        mediaUrl: finalMediaUrl,
        videoUrl: finalVideoUrl,
        desc: sanitizeHtml(desc),
        date: new Date().toISOString().split('T')[0]
    };

    dbFeed.unshift(newPost);
    localStorage.setItem('gynfishing_feed', JSON.stringify(dbFeed));

    adminAddForm.reset();
    uploadedImageBase64 = "";
    imagePreviewBox.style.display = 'none';
    imagePreview.src = "";
    videoUrlGroup.style.display = 'none';
    postVideoUrl.removeAttribute('required');

    renderPublicFeed();
    renderAdminTables();
    showToast("Nova publicação inserida com sucesso!");
    
    adminTabBtns[1].click();
});

// ==========================================
// 10. CADASTRO DE MARCAS (ADMIN)
// ==========================================

if (brandLogoFile) {
    brandLogoFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
            const maxSize = 2 * 1024 * 1024;
            
            if (!allowedTypes.includes(file.type)) {
                showToast("Apenas JPEG, PNG, WebP e SVG são permitidos.", true);
                brandLogoFile.value = '';
                return;
            }
            if (file.size > maxSize) {
                showToast("Arquivo muito grande (máximo 2MB).", true);
                brandLogoFile.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function(event) {
                uploadedBrandLogoBase64 = event.target.result;
                brandLogoPreview.src = uploadedBrandLogoBase64;
                brandLogoPreviewBox.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
}

if (adminBrandForm) {
    adminBrandForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = brandName.value.trim();
        const category = brandCategory.value.trim();

        if (!name || !category) {
            showToast("Preencha todos os campos obrigatórios.", true);
            return;
        }

        if (name.length > 100 || category.length > 100) {
            showToast("Campos excedem o tamanho máximo permitido.", true);
            return;
        }

        if (!uploadedBrandLogoBase64) {
            showToast("Selecione um logo para a marca.", true);
            return;
        }

        const newBrand = {
            id: 'brand-' + Date.now(),
            name: sanitizeHtml(name),
            logo: uploadedBrandLogoBase64,
            category: sanitizeHtml(category)
        };

        dbBrands.unshift(newBrand);
        localStorage.setItem('gynfishing_brands', JSON.stringify(dbBrands));

        adminBrandForm.reset();
        uploadedBrandLogoBase64 = "";
        brandLogoPreviewBox.style.display = 'none';
        brandLogoPreview.src = "";

        renderPublicBrands();
        renderAdminTables();
        showToast("Nova marca adicionada com sucesso!");
        
        if (adminTabBtns[2]) {
            adminTabBtns[2].click();
        }
    });
}

// ==========================================
// 11. EDIÇÃO CMS - TEXTOS DO SITE (ADMIN)
// ==========================================

function populateCmsInputs() {
    cmsHeroTitle.value = dbTexts.hero.title;
    cmsHeroSubtitle.value = dbTexts.hero.subtitle;

    cmsSobreSub.value = dbTexts.sobre.header_sub;
    cmsSobreTitle.value = dbTexts.sobre.header_title;
    cmsSobreContentTitle.value = dbTexts.sobre.content_title;
    cmsSobreP1.value = dbTexts.sobre.p1;
    cmsSobreP2.value = dbTexts.sobre.p2;
    cmsSobreFeat1Title.value = dbTexts.sobre.feat1_title;
    cmsSobreFeat1Desc.value = dbTexts.sobre.feat1_desc;
    cmsSobreFeat2Title.value = dbTexts.sobre.feat2_title;
    cmsSobreFeat2Desc.value = dbTexts.sobre.feat2_desc;
    cmsSobreImgTitle.value = dbTexts.sobre.img_title;
    cmsSobreImgDesc.value = dbTexts.sobre.img_desc;

    cmsVert1Icon.value = dbTexts.vertentes[0].icon;
    cmsVert1Title.value = dbTexts.vertentes[0].title;
    cmsVert1Desc.value = dbTexts.vertentes[0].desc;
    
    cmsVert2Icon.value = dbTexts.vertentes[1].icon;
    cmsVert2Title.value = dbTexts.vertentes[1].title;
    cmsVert2Desc.value = dbTexts.vertentes[1].desc;
    
    cmsVert3Icon.value = dbTexts.vertentes[2].icon;
    cmsVert3Title.value = dbTexts.vertentes[2].title;
    cmsVert3Desc.value = dbTexts.vertentes[2].desc;
}

adminCmsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    dbTexts.hero.title = sanitizeHtml(cmsHeroTitle.value.trim());
    dbTexts.hero.subtitle = sanitizeHtml(cmsHeroSubtitle.value.trim());

    dbTexts.sobre.header_sub = sanitizeHtml(cmsSobreSub.value.trim());
    dbTexts.sobre.header_title = sanitizeHtml(cmsSobreTitle.value.trim());
    dbTexts.sobre.content_title = sanitizeHtml(cmsSobreContentTitle.value.trim());
    dbTexts.sobre.p1 = sanitizeHtml(cmsSobreP1.value.trim());
    dbTexts.sobre.p2 = sanitizeHtml(cmsSobreP2.value.trim());
    dbTexts.sobre.feat1_title = sanitizeHtml(cmsSobreFeat1Title.value.trim());
    dbTexts.sobre.feat1_desc = sanitizeHtml(cmsSobreFeat1Desc.value.trim());
    dbTexts.sobre.feat2_title = sanitizeHtml(cmsSobreFeat2Title.value.trim());
    dbTexts.sobre.feat2_desc = sanitizeHtml(cmsSobreFeat2Desc.value.trim());
    dbTexts.sobre.img_title = sanitizeHtml(cmsSobreImgTitle.value.trim());
    dbTexts.sobre.img_desc = sanitizeHtml(cmsSobreImgDesc.value.trim());

    dbTexts.vertentes[0].icon = sanitizeHtml(cmsVert1Icon.value.trim());
    dbTexts.vertentes[0].title = sanitizeHtml(cmsVert1Title.value.trim());
    dbTexts.vertentes[0].desc = sanitizeHtml(cmsVert1Desc.value.trim());

    dbTexts.vertentes[1].icon = sanitizeHtml(cmsVert2Icon.value.trim());
    dbTexts.vertentes[1].title = sanitizeHtml(cmsVert2Title.value.trim());
    dbTexts.vertentes[1].desc = sanitizeHtml(cmsVert2Desc.value.trim());

    dbTexts.vertentes[2].icon = sanitizeHtml(cmsVert3Icon.value.trim());
    dbTexts.vertentes[2].title = sanitizeHtml(cmsVert3Title.value.trim());
    dbTexts.vertentes[2].desc = sanitizeHtml(cmsVert3Desc.value.trim());

    localStorage.setItem('gynfishing_texts', JSON.stringify(dbTexts));
    
    renderSiteTexts();
    showToast("Todas as páginas do site foram atualizadas!");
    closeAdminModal();
});

// ==========================================
// 12. GERENCIAMENTO - EXCLUIR ITENS
// ==========================================

function renderAdminTables() {
    // Tabela do Feed (Galeria)
    adminFeedTableBody.innerHTML = '';
    dbFeed.forEach(item => {
        const tr = document.createElement('tr');
        const mediaUrl = validateUrl(item.mediaUrl) ? item.mediaUrl : 'assets/serra_mesa.png';
        tr.innerHTML = `
            <td><img src="${mediaUrl}" class="admin-table-thumb" alt="thumb"></td>
            <td style="font-weight: 600; color: white;">${sanitizeHtml(item.title)}</td>
            <td><span class="gallery-tag">${item.type === 'foto' ? 'Foto' : 'Vídeo'}</span></td>
            <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sanitizeHtml(item.desc)}</td>
            <td><button class="btn-delete" onclick="deleteFeedItem('${item.id}')">Excluir</button></td>
        `;
        adminFeedTableBody.appendChild(tr);
    });

    // Tabela de Comentários
    adminCommentsTableBody.innerHTML = '';
    dbComments.forEach(comment => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600; color: white;">${sanitizeHtml(comment.name)}</td>
            <td>${sanitizeHtml(comment.role)}</td>
            <td style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sanitizeHtml(comment.message)}</td>
            <td><button class="btn-delete" onclick="deleteCommentItem('${comment.id}')">Excluir</button></td>
        `;
        adminCommentsTableBody.appendChild(tr);
    });

    // Tabela de Marcas
    if (adminBrandsTableBody) {
        adminBrandsTableBody.innerHTML = '';
        dbBrands.forEach(brand => {
            const tr = document.createElement('tr');
            const logoUrl = validateUrl(brand.logo) ? brand.logo : 'assets/placeholder-brand.png';
            tr.innerHTML = `
                <td><img src="${logoUrl}" class="admin-table-thumb" alt="logo"></td>
                <td style="font-weight: 600; color: white;">${sanitizeHtml(brand.name)}</td>
                <td>${sanitizeHtml(brand.category)}</td>
                <td><button class="btn-delete" onclick="deleteBrandItem('${brand.id}')">Excluir</button></td>
            `;
            adminBrandsTableBody.appendChild(tr);
        });
    }
}

window.deleteFeedItem = function(id) {
    if (confirm("Tem certeza que deseja excluir esta publicação da galeria?")) {
        dbFeed = dbFeed.filter(item => item.id !== id);
        localStorage.setItem('gynfishing_feed', JSON.stringify(dbFeed));
        renderPublicFeed();
        renderAdminTables();
        showToast("Publicação removida com sucesso!");
    }
};

window.deleteCommentItem = function(id) {
    if (confirm("Tem certeza que deseja excluir este comentário?")) {
        dbComments = dbComments.filter(comment => comment.id !== id);
        localStorage.setItem('gynfishing_comments', JSON.stringify(dbComments));
        renderPublicComments();
        renderAdminTables();
        showToast("Comentário removido com sucesso!");
    }
};

window.deleteBrandItem = function(id) {
    if (confirm("Tem certeza que deseja excluir esta marca?")) {
        dbBrands = dbBrands.filter(brand => brand.id !== id);
        localStorage.setItem('gynfishing_brands', JSON.stringify(dbBrands));
        renderPublicBrands();
        renderAdminTables();
        showToast("Marca removida com sucesso!");
    }
};

// ==========================================
// 13. REPRODUTOR DE VÍDEO EM TELA CHEIA (MODAL)
// ==========================================

window.playVideo = function(videoUrl) {
    videoPlayerTarget.innerHTML = '';
    if (!validateUrl(videoUrl) && !videoUrl.includes('youtube')) {
        showToast("URL de vídeo inválida.", true);
        return;
    }

    if (videoUrl.includes('embed') || videoUrl.includes('youtube')) {
        videoPlayerTarget.innerHTML = `
            <iframe src="${videoUrl}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:100%; border:none;"></iframe>
        `;
    } else {
        videoPlayerTarget.innerHTML = `
            <video src="${videoUrl}" controls autoplay style="width:100%; height:100%; object-fit:contain;"></video>
        `;
    }
    modalVideo.classList.add('active');
    document.body.style.overflow = 'hidden';
};

btnCloseVideo.addEventListener('click', closeVideoPlayer);
modalVideo.addEventListener('click', (e) => {
    if (e.target === modalVideo) closeVideoPlayer();
});

function closeVideoPlayer() {
    modalVideo.classList.remove('active');
    videoPlayerTarget.innerHTML = '';
    document.body.style.overflow = 'auto';
}

// Auxiliar: Formatar Data no formato brasileiro DD/MM/AAAA
function formatDate(dateString) {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// ==========================================
// 14. CARREGAMENTO INICIAL DO SITE
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    renderSiteTexts();
    renderPublicFeed();
    renderPublicComments();
    renderPublicBrands();
});