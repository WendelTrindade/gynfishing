# 🎣 GynFishing - Site Oficial

**A evolução da pesca esportiva. Técnica avançada, equipamentos de alta precisão e roteiros exclusivos sob uma ótica contemporânea e sofisticada.**

![Status](https://img.shields.io/badge/Status-Ready%20for%20Production-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Netlify](https://img.shields.io/badge/Hosting-Netlify-00C7B7)

## 📋 Visão Geral

GynFishing é um site moderno e responsivo dedicado à pesca esportiva de alta performance no Brasil. Oferecemos:

- **Galeria de Publicações** - Fotos e vídeos de capturas e técnicas
- **Painel Administrativo** - CMS local para gerenciar conteúdo
- **Marcas Parceiras** - Até 10+ marcas com logos personalizados
- **Comentários** - Relatos de clientes e pescadores
- **Edição de Textos** - Customização completa do site

## 🚀 Deployment no Netlify

### Passo 1: Preparação

1. Certifique-se de que todos os arquivos estão no repositório GitHub:
   - `index.html` - Página principal
   - `style.css` - Estilos
   - `app.js` - Lógica da aplicação (versão segura)
   - `netlify.toml` - Configuração Netlify
   - `.gitignore` - Arquivos ignorados
   - `assets/` - Imagens e recursos

2. Faça commit de todas as alterações:
```bash
git add .
git commit -m "Preparação para deploy no Netlify"
git push origin main
```

### Passo 2: Conectar Netlify

1. Acesse https://netlify.com
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Selecione **GitHub** como provedor
4. Autorize Netlify a acessar seus repositórios
5. Selecione o repositório `GynFishing`
6. Clique em **"Deploy site"**

### Passo 3: Configurações Automáticas

O arquivo `netlify.toml` já está configurado com:

✅ **Security Headers** - Proteção contra XSS, Clickjacking e outros ataques
✅ **Cache Optimization** - Estratégia de cache para arquivos estáticos
✅ **Redirects** - SPA routing configurado
✅ **Build Command** - Pronto para produção

### Passo 4: Domain Customizado (Opcional)

1. No painel Netlify, acesse **Site settings** → **Domain management**
2. Clique em **Add custom domain**
3. Insira seu domínio (ex: www.gynfishing.com.br)
4. Siga as instruções para apontar o DNS

## 🔒 Segurança Implementada

O código foi atualizado com múltiplas camadas de segurança:

- ✅ **Sanitização XSS** - Todas as entradas são sanitizadas
- ✅ **Validação de URLs** - URLs são validadas antes do uso
- ✅ **Validação de Arquivos** - Apenas imagens permitidas (JPEG, PNG, WebP)
- ✅ **Limite de Tamanho** - Máximo 5MB por imagem, 2MB para logos
- ✅ **SessionStorage** - Autenticação segura via sessionStorage
- ✅ **Event Delegation** - Previne inline onclick vulnerabilities
- ✅ **Content Security Policy** - CSP headers implementados

## 📊 Funcionalidades

### Painel Administrativo

**Acesso:** Clique em "Admin" no rodapé
- **Senha padrão:** `gynfishing123`

#### Aba 1: Adicionar Publicações
- Títulos e descrições
- Upload de imagens (até 5MB)
- Integração com YouTube
- Tipo: Foto ou Vídeo

#### Aba 2: Gerenciar Publicações
- Lista todas as postagens
- Deletar publicações
- Visualizar thumbnails

#### Aba 3: Adicionar Marcas
- Nome da marca
- Logo (até 2MB, JPEG/PNG/WebP/SVG)
- Categoria
- Até 10+ marcas suportadas

#### Aba 4: Gerenciar Marcas
- Lista todas as marcas
- Deletar marcas
- Visualizar logos

#### Aba 5: Editar Páginas do Site
- **Hero Section** - Título e subtítulo
- **Sobre** - Textos e recursos
- **Vertentes** - Serviços/ícones (até 3)
- Salva automaticamente em localStorage

#### Aba 6: Gerenciar Comentários
- Lista de comentários
- Deletar comentários
- Moderação simples

### Data Persistence

Todos os dados são armazenados em `localStorage`:

```javascript
gynfishing_feed        // Publicações
gynfishing_comments    // Comentários
gynfishing_brands      // Marcas parceiras
gynfishing_texts       // Textos do site
```

## 🛠 Desenvolvimento Local

### Setup

```bash
# Clone o repositório
git clone https://github.com/WendelTrindade/GynFishing.git
cd GynFishing

# Abra em um servidor local (recomendado)
python -m http.server 8000
# ou
npx serve .
```

Acesse `http://localhost:8000`

### Estrutura de Pastas

```
GynFishing/
├── index.html              # Página principal
├── style.css               # Estilos
├── app.js                  # Lógica (versão segura)
├── netlify.toml            # Config Netlify
├── .gitignore              # Git ignore
├── README.md               # Este arquivo
└── assets/
    ├── amazon.png          # Imagens de exemplo
    ├── araguaia.png
    ├── serra_mesa.png
    └── brands/             # Logos das marcas
        ├── shimano.png
        ├── abu-garcia.png
        └── ... (até 10+)
```

## 🔐 Variáveis de Ambiente (Produção)

Para segurança extra em produção, você pode usar variáveis de ambiente no Netlify:

1. Acesse **Site settings** → **Build & deploy** → **Environment**
2. Adicione:
   ```
   ADMIN_PASSWORD = sua_senha_segura
   ```

## 📱 Responsividade

O site é totalmente responsivo para:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🎨 Customização de Cores

Edite `style.css` para ajustar as cores:

```css
:root {
  --primary: #1a1a1a;
  --secondary: #0066cc;
  --accent: #ffd700;
  --silver-dark: #3a3a3a;
  /* ... mais cores */
}
```

## 📈 Performance

- **Lazy Loading** - Imagens carregadas sob demanda
- **Minificação** - CSS e JS otimizados
- **Cache Busting** - Versões de arquivo gerenciadas
- **CDN** - Netlify CDN global integrado

## 🐛 Troubleshooting

### "Erro 404" ao recarregar a página
- ✅ Resolvido: `netlify.toml` redireciona para `index.html`

### "localStorage está cheio"
- ✅ Limpe o localStorage em DevTools ou use `localStorage.clear()`

### "Imagens não aparecem no admin"
- ✅ Verifique o tamanho (máx 5MB)
- ✅ Formato aceito: JPEG, PNG, WebP

### "Vídeos do YouTube não funcionam"
- ✅ Use a URL completa: `https://www.youtube.com/watch?v=...`

## 📞 Suporte

- 📧 Email: wendelemilio@gmail.com
- 🐙 GitHub: https://github.com/WendelTrindade/GynFishing

## 📜 Licença

MIT License - Livre para usar em projetos comerciais e pessoais.

---

## 🚀 Deploy Rápido (One-Click)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/WendelTrindade/GynFishing)

---

**Última atualização:** Junho 2026
**Versão:** 2.0 (Segura + Marcas)
**Status:** ✅ Pronto para Produção
