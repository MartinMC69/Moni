# Moni — Expense Tracker

## Stack
Single HTML file app (vanilla JS, CSS, no frameworks)

## Architecture
- All code in `wydatki.html` — one file
- localStorage via safe wrapper `_ls` / `_ss`
- ES5 compatible (no arrow functions in critical paths, no spread, no destructuring)
- 5 languages: pl, en, de, ru, zh

## Key functions
- `renderMonthly()` — main view
- `renderTrends()` / `renderChart()` — trends tab (ES5 only!)
- `renderAI()` — AI summary + forecast
- `persist()` — saves to localStorage
- `loadState()` — loads from localStorage

## Critical rules
- NO optional chaining (?.)
- NO spread operator (...) outside strings
- NO destructuring in function params
- NO const/let in loops — use var
- All localStorage/sessionStorage calls via _ls/_ss wrappers
- renderChart() must stay pure ES5 — Safari compatibility