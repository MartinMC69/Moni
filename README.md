# 🌿 Moni — Track your money

> Take control of your home budget in one place. Simple, offline, no registration required.

![Version](https://img.shields.io/badge/version-1.4.0-4FD1A5?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-ready-0F2F2F?style=flat-square)
![Tech](https://img.shields.io/badge/vanilla-HTML%2FCSS%2FJS-orange?style=flat-square)

---

## 📋 About

**Moni** is a simple and fast PWA (Progressive Web App) for tracking household expenses. It works fully **offline** — no server, no cloud database, no subscription. All data is stored locally in the browser.

You can install the app directly on your phone's home screen (iOS and Android) and use it like a native mobile app.

---

## ✨ Features

### 💸 Expense Tracking
- Add expenses with amount, date, and category
- Automatic today's date suggestion
- Full expense list sorted by date
- Delete individual entries

### 📅 Monthly View
- Browse expenses month by month
- Summary card: total, entry count, average expense, top category
- Optional **budget bar** with percentage visualization (yellow ≥ 80%, red when exceeded)
- Monthly notes (e.g. comments for a given month)

### 📆 Weekly View
- Expenses broken down by calendar weeks
- Week number and date range for each week

### 📈 Trends
- Current month expense structure by category with progress bars
- Annual line chart (last 12 months) with category filtering

### 🤖 AI (Local Analytics)
- **Monthly summary**: top category, largest single expense, most expensive day of the week, comparison with previous month
- **Forecast**: estimated end-of-month spending (based on daily rate and history), per-category forecast
- **Month-over-month comparison**: percentage change per category

> All analytics run **without any external AI** — these are local calculations on user data.

### ⚙️ Settings
- **Dark / light theme** (persisted between sessions)
- **Language**: Polski, English, Deutsch, Русский, 中文
- **Monthly budget**: set per month
- **Categories**: full editing — add, rename, change icon, hide, delete; rich SVG icon library
- **CSV export**: current month with BOM (Excel compatible)
- **Data deletion**

---

## 🚀 Installation (PWA)

### On your phone (Android / iOS)
1. Open the app in your browser (Chrome / Safari)
2. Tap **"Add to Home Screen"** (Android: menu ⋮ → Install app; iOS: Share button → Add to Home Screen)
3. Done — the Moni icon will appear on your home screen like a native app

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and templates |
| CSS3 (Vanilla) | Styling, custom properties, dark mode, animations |
| JavaScript (ES6+) | All application logic |
| localStorage | User data persistence |
| Service Worker | Offline mode (PWA) |
| Web App Manifest | Device installation |

The app has **zero external dependencies** — no npm, no CDN, no frameworks.

---

## 🌐 Supported Languages

| Code | Language |
|------|----------|
| 🇵🇱 `pl` | Polski (default) |
| 🇬🇧 `en` | English |
| 🇩🇪 `de` | Deutsch |
| 🇷🇺 `ru` | Русский |
| 🇨🇳 `zh` | 中文 |

Default category names are automatically translated when switching languages.

---

## 🔒 Privacy & Data

- Data is stored **exclusively locally** in the browser (`localStorage`)
- No servers, no telemetry, no user accounts (Google login is optional and disabled by default)
- CSV data export — you always have access to your data

---

## 📄 License

MIT © 2025 MartinMC69
