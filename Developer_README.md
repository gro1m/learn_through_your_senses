# 🧑‍💻 Developer Guide

## 🚀 Overview

This project is a personal portfolio website built with Vite + React for the interactive frontend and Node.js (Express) for backend routing and server-side rendering using EJS templates.

It also integrates a machine learning demo — the Dog Breed Classifier — which is hosted separately as a Hugging Face Space and embedded in the portfolio through an `<iframe>`.

## 🧩 Project Basic Structure

```bash
.
├── src/                # React (Vite) frontend
│   ├── components/     # React components
│   ├── routes/         # Route components (React Router)
│   └── main.tsx        # Vite entry point
│
├── views/              # Express EJS templates
├── routes/             # Express route definitions
├── public/             # Static files served by Express
│
├── package.json
├── vite.config.ts      # Vite configuration
├── tsconfig.json
├── README.md
└── Developer_README.md
```

## 🧰 Prerequisites

Make sure you have the following installed:

- `Node.js` ≥ 18
- `npm` ≥ 9

(Optional) `pnpm` or `yarn` if you prefer an alternative package manager

Check with:

```bash
node -v
npm -v
```

## ⚙️ Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/gro1m/learn_through_your_senses.git 
cd learn_through_your_senses
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 🧩 Local Development

The app consists of two parts:

- `Frontend` (Vite + React)
- `Backend` (Express server)

Depending on how your project is structured, you can either run them separately or together.

#### 🖥️ Option A: Run Frontend Only (Vite Dev Server)

If you only want to preview the React frontend:

```bash
npm run dev
```

This will start Vite's development server (by default at <http://localhost:5173>) and enable Hot Module Reloading (HMR).

#### 🌐 Option B: Run Full Express App (with EJS routes)

If your project uses the Express server to render pages and route to EJS templates, run:

```bash
npm start
```

or (if defined in `package.json`):

```bash
node server.js
```

Then open your browser at <http://localhost:3000>
.

If you use `Vite` build for production assets, the `Express` app will serve from the built `dist/` folder.

## 🧩 Building for Production

To bundle the frontend for deployment:

```bash
npm run build
```


This will generate optimized static files under the dist/ directory.
Your Express server can then serve those files directly.

Example (in `server.js` or `app.js`):

```bash
app.use(express.static(path.join(__dirname, "dist")));
```

## 🧠 Notes

The Dog Breed Classifier demo is embedded via:

```typescript
<iframe src="https://huggingface.co/spaces/YOUR_USERNAME/dog-breed-classifier"></iframe>
```

It runs remotely on Hugging Face — no local setup needed.

The Hugging Face Space is free-tier, so it may "sleep" after inactivity.
The React overlay ("Waking up Space…") is included to handle this gracefully.

If you modify the `React` frontend, rebuild using:

```bash
npm run build
```

Then restart the Node server.

## 🧪 Useful Commands

| ----------------- | -------------------------------- |
| Command           | Description                      |
| `npm run dev`     | Start Vite React dev server      |
| `npm start`       | Start Express server             |
| `npm run build`   | Build frontend for production    |
| `npm run preview` | Preview production build locally |

## 📦 Deployment

- Frontend → Deployed automatically by Netlify (or Vercel) using the built dist/ folder.
- Backend (if needed) → Deploy on Render, Railway, or Vercel serverless functions.
- Model Demo (Dog Classifier) → Hosted separately on Hugging Face Spaces.
