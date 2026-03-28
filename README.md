# CricketAtlas – The Complete Cricket Encyclopedia

CricketAtlas is a fully responsive, static cricket knowledge hub built with HTML, CSS, and JavaScript. It serves as a comprehensive Wikipedia-style resource covering every aspect of cricket: basics, international (Test, ODI, T20, WPL, U‑19), domestics (domestic leagues of few countries), match histories, player profiles, records, and news updates up to 2026. The website features a modern UI with dark/light mode, smooth animations, expandable cards, and an interactive mini cricket game.

## 🌟 Features

- **Well‑structured content** – 9 dedicated pages covering all major cricket topics.
- **Dark / Light mode toggle** – Consistent across all pages, saved in local storage.
- **Interactive mini game** – Floating button opens a bat‑and‑ball game with score tracking.
- **Expandable sections** – Match history details are hidden until clicked.
- **Smooth page transitions** – Subtle fade‑in animations.
- **Responsive design** – Works seamlessly on desktop, tablet, and mobile.
- **Fully static** – No backend or external databases; all content is embedded in HTML.

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

- **Basics** – Rules, terminologies, and introduction.
- **international** – Detailed explanation of Test, ODI, T20, WPL, U‑19 with winners tables (updated to 2026).
- **domestics** – Major international events (World Cups, WTC) plus domestic leagues (IPL, BBL, PSL, etc.).
- **Match History** – Iconic matches with expandable summaries.
- **Players** – Detailed profiles of cricket legends including stats and timelines.
- **History** – Visual timeline from 1844 to 2026.
- **Records** – Batting, bowling, team records (updated to 2026).
- **News** – Manually curated news articles from 2026.

All content is embedded directly in HTML files – no external API calls.

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript (ES6)
- Font Awesome icons
- Google Fonts (Inter)

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software for any purpose, provided that the copyright notice and permission notice appear in all copies.