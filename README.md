# CricketAtlas – The Complete Cricket Encyclopedia

CricketAtlas is a fully responsive, static cricket knowledge hub built with HTML, CSS, and JavaScript. It serves as a comprehensive Wikipedia-style resource covering every aspect of cricket: basics, international (Test, ODI, T20, WPL, U‑19), domestics (domestic leagues of few countries), match histories, player profiles, records, and news updates up to 2026. The website features a modern UI with dark/light mode, smooth animations, expandable cards, and an interactive mini cricket game.

## 🌟 Features

- Structured multi-page cricket encyclopedia (9+ sections)
- Dark / Light mode with persistent user preference
- Interactive mini cricket game with score tracking
- Expandable match summaries for better readability
- Smooth animations and transitions across pages
- Responsive design optimized for all devices
- Fully static architecture (no backend dependencies)

## 📁 Project Structure

CricketAtlas/
├── index.html
├── basics.html
├── international.html
├── domestic.html
├── match-history.html
├── players.html
├── history.html
├── records.html
├── news.html
├── css/
│ ├── style.css # Base styling and components
│ ├── dark-mode.css # Dark theme variables
│ ├── animations.css # Keyframes, transitions, expandable logic
│ └── responsive.css # Media queries
├── js/
│ ├── main.js # Initialization (optional)
│ ├── darkmode.js # Dark mode toggle + localStorage
│ ├── animations.js # Expandable card logic
│ └── game.js # Mini cricket game (modal + gameplay)
└── assets/
├── images/ # (Placeholder – add your own images)
├── icons/ # (Placeholder)
└── logos/ # (Placeholder)



## 🚀 Getting Started

1. **Clone or download** the repository.
2. **No build step required** – just serve the files using any local web server or open directly in a browser.
   - For best results (to avoid CORS issues when loading components via `fetch`), use a local server:
     - **VS Code Live Server** extension
     - **Python** `python -m http.server`
     - **Node** `npx serve`
3. Open `index.html` in your browser.

## 🎮 Mini Cricket Game

- A floating button (bottom‑right) opens a modal mini‑game.
- Click **Hit!** to score random runs (1–6).
- If you score 0, you are out and the game ends.
- Your final score is displayed.

## 🌗 Dark Mode

- Click the moon icon in the sticky header to switch between light and dark themes.
- Your preference is remembered for future visits.

## 📄 Content Overview

- **Basics** – Introduction, rules, and terminology  
- **International Formats** – Test, ODI, T20, WPL, U-19 with winners  
- **Domestic & Tournaments** – IPL, BBL, PSL, and global competitions  
- **Match History** – Iconic matches with expandable insights  
- **Players** – Profiles, stats, and achievements  
- **History** – Timeline from 1844 to 2026  
- **Records** – Major batting, bowling, and team milestones  
- **News** – Curated updates up to 2026 

All content is embedded directly in HTML files – no external API calls.

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript (ES6)
- Font Awesome icons
- Google Fonts (Inter)

## 🔗 Live Demo

[View Website](https://vanshmehta6.github.io/CricketAtlas/)

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software for any purpose, provided that the copyright notice and permission notice appear in all copies.
