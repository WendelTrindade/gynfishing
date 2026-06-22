# GynFishing - Atualizações manuais (CMS local-first)

Arquivos entregues:
- index.html (substituir o arquivo atual na raiz do site)
- app.js (substituir o arquivo atual na raiz do site)
- Sugestão de CSS (abaixo) para integrar estilos da seção Equipamentos e toast.

Antes de subir:
1. Faça backup dos arquivos antigos (index.html, app.js, style.css).
2. Se o projeto tem uma pasta pública (ex.: `public/`), mova os arquivos para lá e ajuste `src` do script/links no HTML.

Senha do painel:
- Senha local padrão: `gyn2026`
- Você pode alterá-la pelo Painel Admin → Editar Páginas do Site → "Senha do Painel (Local)". Essa senha é salva no localStorage (local-first). Para maior segurança, implemente autenticação server-side.

O que foi adicionado:
- Modal administrativo com foco acessível, ESC para fechar e bloqueio de scroll.
- CMS local-first que salva:
  - Conteúdo do hero, seção "A Marca", vertentes (3), equipamentos (até 6 marcas).
  - Links das redes sociais (YouTube, Instagram, TikTok, Facebook, X) que atualizam o rodapé.
  - Comentários (persistidos localmente).
- Upload de imagem com validação básica e preview (3 MB max).
- Evitamento de innerHTML inseguro para comentários; escape mínimo onde necessário.
- Marcação ARIA básica e type="button" em botões não-submit.
- Nova seção "Equipamentos" (id="equipamentos") que lista marcas cadastradas via CMS.

Testes locais:
1. Abra a página (index.html) no servidor local (recomendado: `http-server` ou Live Server).
2. Clique em "Painel Admin".
3. Entre com senha `gyn2026`.
4. Vá em "Editar Páginas do Site", preencha:
   - Campos do hero e sobre (para testar aplicação imediata).
   - Campos de Equipamentos (até 6) → Salvar.
   - Campos de Redes Sociais → Salvar.
   - Se definir nova senha, será deslogado para usar a nova senha no próximo login.
5. Verifique:
   - Equipamentos aparecem em seção Equipamentos.
   - Links do rodapé apontam para os URLs que você preencheu.
   - Comentários podem ser enviados (persistem no localStorage).
   - Upload de imagem mostra preview e valida tipo/tamanho.

Como subir manualmente para o GitHub (opções)

A) Via interface web do GitHub
- Navegue até o repositório e branch desejados.
- Clique em Add file → Upload files → escolha index.html e app.js → Commit directly to branch ou criar nova branch/PR.
- Commit message sugerida: `feat: adicionar painel CMS local-first, seção equipamentos e redes sociais; melhorias de acessibilidade`

B) Via Git (recomendado)
- No terminal, na raiz do seu repositório:
  - git checkout -b gynfishing/cms-updates
  - cp /caminho/para/index.html ./index.html
  - cp /caminho/para/app.js ./app.js
  - git add index.html app.js
  - git commit -m "feat: adicionar painel CMS local-first, seção equipamentos e redes sociais; melhorias de acessibilidade"
  - git push -u origin gynfishing/cms-updates
- Abra um Pull Request no GitHub da branch `gynfishing/cms-updates` para revisão.

CSS sugerido (adicione ao seu style.css)
- minimal para equipamentos / toast e cards; ajuste conforme seu design.

```css name=style-suggestions.css
/* Sugestões rápidas - cole no style.css */
.equipment-list {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
  margin-top: 1rem;
}
.equipment-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.04);
  padding: .6rem .9rem;
  border-radius: 8px;
  color: var(--silver-light);
  font-weight: 600;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
}

/* service-card (vertentes) */
.service-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.03);
  min-width: 200px;
}
.service-card .service-icon { font-size: 1.6rem; margin-bottom: .25rem; }

/* toast */
.toast {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: .6rem 1rem;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .18s ease, transform .18s ease;
  z-index: 9999;
}
.toast.show { opacity: 1; transform: translateY(0); }

/* image preview box */
.image-preview-box img { max-width: 200px; border-radius: 6px; display:block; }
