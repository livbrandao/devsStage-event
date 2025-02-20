![devStage](src/assets/logo.svg)

# CodeCraft Summit 2025

## 💻 Sobre o projeto

Plataforma web desenvolvida para o CodeCraft Summit 2025, um evento online e gratuito para desenvolvedores. O projeto permite que usuários se inscrevam no evento e participem de um sistema de indicações, onde podem convidar outras pessoas e concorrer a prêmios exclusivos ao entrar no ranking.

## 🎨 Layout

O layout completo da aplicação está disponível no Figma:

- [Style Guide - DevStage](<https://www.figma.com/design/Qs4SacGG29PxJkMjFzWaVI/NLW-Connect-%E2%80%A2-DevStage-(Community)?node-id=0-1&t=ffr5c1sKtRdtShh7-1>)

## 🚀 Tecnologias utilizadas

### Front-end

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Lucide React](https://lucide.dev/)
- [Biome](https://biomejs.dev/)
- [Orval](https://orval.dev/)

### Back-end

- API desenvolvida em Node.js (disponível em [rocketseat-education/nlw-connect-node](https://github.com/rocketseat-education/nlw-connect-node))
- Docker para o banco de dados

## ✨ Funcionalidades

- Página inicial com informações do evento
- Formulário de inscrição com validações
- Sistema de convites e indicações
- Ranking de indicações
- Link personalizado para cada inscrito
- Integração com backend para:
  - Cadastro no evento
  - Registro de links de acesso
  - Listagem do ranking de indicações
  - Contagem de inscrições por link

## 🏗️ Estrutura do Projeto

O projeto foi estruturado seguindo o Style Guide do Figma, com uma organização clara de componentes e páginas. Principais características:

- Utilização de rotas dinâmicas no Next.js para gerenciar IDs de inscritos
- Componentes reutilizáveis e tipados
- Integração com backend utilizando cliente HTTP gerado pelo Orval
- Sistema de validação de formulários com React Hook Form e Zod
- Estilização utilizando Tailwind CSS com classes personalizadas

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/livbrandao/devsStage-event.git

# Acesse a pasta do projeto no terminal
$ cd devsStage-event

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

## 🔗 Funcionalidades do Sistema de Convites

- Geração de links únicos para cada inscrito
- Rastreamento de inscrições através do parâmetro `referrer`
- Página personalizada para acompanhamento de indicações
- Sistema de ranking em tempo real
- Contadores de visualizações e conversões por link

## 📱 Layout Responsivo

O projeto conta com um design responsivo, adaptando-se a diferentes tamanhos de tela:

- Layout mobile-first
- Breakpoints customizados para tablets e desktops
- Componentes adaptáveis utilizando Tailwind CSS
- Otimização de imagens com Next.js Image

## 🛠 Configurações Adicionais

- Configuração do Biome para linting e formatação
- Setup do Tailwind CSS com tema personalizado
- Configuração do Orval para geração de tipos e clients
- Tipagem estrita com TypeScript
- Configurações de build e deploy com Next.js

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
