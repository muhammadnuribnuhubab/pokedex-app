# 🦸‍♂️ Pokedex App

A modern Pokedex app built with **Next.js** and **TypeScript**, allowing users to search for Pokémon, view their detailed information, and explore their evolution chain. The app uses [Poke API](https://pokeapi.co) for fetching Pokémon data and **Zustand** for state management. Live demo: [findpoke.vercel.app](https://findpoke.vercel.app)

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&logoColor=white)](https://vercel.com)  
[![Next.js](https://img.shields.io/badge/built%20with-Next.js-000?logo=next.js)](https://nextjs.org)  
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-Tailwind%20CSS-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 🚀 Features

### 🏠 Home Page

- **Hero Section** with a search bar for Pokémon by name/ID
- **Live search** in the header that filters results as you type
- List of Pokémon with names, types, and images

### 📄 Pokémon Detail Page

- Show detailed information about a selected Pokémon, including:
  - ID, Name, Description
  - Type(s)
  - Abilities
  - Size and Stats
  - Artwork
  - Evolution chain
- **Protected routing** to prevent direct access via URL without navigation flow,

### 💡 State Management

- **Zustand** for state management to handle app-wide state (e.g., selected Pokémon, search query)

### 💡 Responsive UI

- Mobile-friendly
- Smooth animations and transitions using **Framer Motion**

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zustand**
- **Framer Motion**
- **PokéAPI** (for Pokémon data)

---

## 📦 Getting Started

```bash
git clone https://github.com/muhammadibnu05/pokedex-app.git
cd pokedex-app

npm install # or bun/yarn/pnpm
npm run dev # or bun dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [PokéAPI Docs](https://pokeapi.co/docs/v2)

---

## 📄 Deployment

Deploy on Vercel:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
