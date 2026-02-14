# Pookie Games

Welcome to **Pookie Games**, a modern, lightweight, and engaging mini-games portal built with speed and performance in mind. This project serves as a central hub for classic arcade and logic games, starting with a Tic-Tac-Toe implementation.

![Project Preview](https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=1200&auto=format&fit=crop&q=80) 

---

## Overview

**Pookie Games** is a web-based gaming platform that leverages the power of **React 19** and **Vite 7** to provide a consistent user experience. The application features a grid-based home page where users can browse and launch mini-games.

### Key Features
- **Lightning Fast:** Built with Vite for rapid development and optimized production builds.
- **Modern UI/UX:** Styled with Tailwind CSS v4, featuring a responsive bento-style grid layout.
- **Interactive Games:** Engaging game logic and state management.
- **Fully Responsive:** Play anywhere on mobile, tablet, or desktop devices.
- **Seamless Routing:** Client-side navigation powered by React Router.

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Folder Structure

```text
pookie-games/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Project-wide assets (Images, JSON data)
│   │   └── TotalGames.json # Games configuration and metadata
│   ├── Components/
│   │   ├── Games/          # Individual game logic (e.g., TicTacToe.jsx)
│   │   ├── Pages/          # Page-level components (HomePage.jsx)
│   │   └── InfoBox.jsx     # Reusable UI components
│   ├── App.jsx             # Application router and layout
│   ├── main.jsx            # Project entry point
│   ├── App.css             # Component-specific styles
│   └── index.css           # Global Tailwind directives
├── eslint.config.js        # Linting rules
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite build settings
```

---

## Requirements

To run this project locally, ensure you have the following installed:
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (or yarn/pnpm)

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammad-abdullah11/pookie-games.git
   cd pookie-games
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Available Games

| Game | Status | Description |
| :--- | :--- | :--- |
| **Tic Tac Toe** | Live | Classic 3x3 strategy game for two players. |
| **More Coming Soon** | Pending | Stay tuned for more exciting mini-games! |

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


<p align="center">Made with love for gamers everywhere.</p>
