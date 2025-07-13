# DripFlow - AI-Powered Email Marketing Platform

DripFlow is a modern email marketing platform built with Next.js 14, React, TypeScript, and Tailwind CSS. It features AI-powered newsletter generation, automated email campaigns, and analytics.

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icons

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17 or higher)
- [pnpm](https://pnpm.io/) (v8.0 or higher)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/aniketmandloi/dripflow-project.git
   cd dripflow-project
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server

## 📁 Project Structure

```
dripflow/
├── app/                   # Next.js app directory
├── components/           # React components
│   ├── ui/              # Shadcn UI components
│   └── layout/          # Layout components
├── contexts/            # React contexts
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## 🎨 Customization

### Theme

The app uses Tailwind CSS for styling. You can customize the theme in:

- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - Global styles
- `components.json` - Shadcn UI theme configuration

### Components

UI components are built using Shadcn UI. You can add new components using:

```bash
pnpm ui add [component-name]
```
