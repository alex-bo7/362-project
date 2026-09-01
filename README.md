# 362 Project, A Recycling Rewards Platform

> "A Cleaner World, A Fuller Wallet" — dispose of recyclable trash, earn points, and redeem them for rewards.

A two-part React + TypeScript + Vite application: a **user-facing web app** (`frontend`) where people sign up, log in, and track their points, and a **kiosk-style deposit app** (`backend`) used at a physical trash-collection station to award points when someone drops off paper, cardboard, or plastic. Created by a team of 4 students.

> Despite its name, the `backend` directory is **not** an API server — it's a second React/Vite front-end (a kiosk UI). The actual data layer is a mock REST API served by [`json-server`](https://github.com/typicode/json-server) from `frontend/data/db.json`. Naming/structure notes are called out below in case that wasn't intentional.

## Features

- **Sign up / log in** with email and password
- **Points system** — points are awarded for depositing paper (+5), cardboard (+8), or plastic (+10)
- **Account page** showing the logged-in user's email and current point balance
- **Kiosk flow** (`backend`) — a simple "Start Trash Deposit" screen that looks up a user by email and adds points for the trash types they select
- **Marketing landing page** — hero section, "How It Works" / "Why Participate" / "Our Mission" info cards

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend (`frontend/`) | React 19, TypeScript, Vite, React Router 7 |
| Kiosk app (`backend/`) | React 19, TypeScript, Vite |
| Data layer | [json-server](https://github.com/typicode/json-server) (mock REST API over `frontend/data/db.json`) |
| Linting | ESLint 9 + typescript-eslint |

## Project Structure

```
362-project/
├── frontend/            # User-facing web app
│   ├── data/db.json     # Mock database (users, points) served via json-server
│   └── src/
│       ├── components/  # Nav, Hero, Info, Card, Footer, Forms, User
│       ├── hooks/       # useFetch
│       └── pages/       # HomePage, LoginPage, SignupPage, Account
└── backend/             # Kiosk / trash-deposit app
    └── src/
        ├── Components/  # Welcome, Form, Checkbox
        └── hooks/       # useFetch
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

## Getting Started

Both apps and the mock API need to run at the same time, in three separate terminals.

### 1. Start the mock API (data layer)

```bash
cd frontend
npm install
npx json-server data/db.json
```

By default `json-server` serves on `http://localhost:3000` — this is the URL both apps' `useFetch` hooks call directly, so it must be running before you use either app.

### 2. Start the user-facing app

```bash
cd frontend
npm run dev
```

### 3. Start the kiosk app

```bash
cd backend
npm install
npm run dev
```

Vite will print the local dev URL for each app (typically `http://localhost:5173` and `http://localhost:5174`).

## Available Scripts

Run from inside either `frontend/` or `backend/`:

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Known Issues / Notes

- **`backend/src/Components/Form/Form.tsx`** — `HandleSubmit` is typed as `React.formeven<HTMLInputElement>`, which isn't a valid React type (should be `React.FormEvent<HTMLFormElement>`) and will fail type-checking on `npm run build`.
- User passwords are stored in plain text in `frontend/data/db.json`, and both apps talk directly to `json-server` with no auth layer — fine for a class project/demo, not production-ready.
- The `backend` folder name is misleading given it's a second front-end, not an API server; consider renaming it (e.g. `kiosk/`) if you want the structure to be self-explanatory.
