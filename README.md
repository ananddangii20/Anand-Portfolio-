# 🌐 Anand Dangi – Developer Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and journey as a developer.

🔗 Live Demo: https://ananddangii20-portfolio.vercel.app/

---

## 🚀 About Me

I am an Information Technology student passionate about full stack development and AI.

I enjoy building real-world projects, exploring new technologies, and continuously improving my skills through hands-on development.

---

## ✨ Features

- ⚡ Smooth animations using Framer Motion
- 🌌 Galaxy-style animated background
- 📱 Fully responsive design
- 🧠 Timeline-based "My Story" section
- 💼 Project showcase with detailed view
- 🔗 Real LinkedIn posts integration
- 🎯 Clean and minimal UI/UX

---

## 🛠️ Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend (Projects)
- Node.js
- Express.js
- MongoDB

### AI & Tools
- Gemini API
- Git & GitHub
- Docker (basic)

---

## 📂 Sections

- 🏠 Home (Hero Section)
- 📖 My Story (Timeline)
- 🚀 Projects
- 💼 Experience (LinkedIn Posts)
- 🧠 Skills
- 📬 Contact

---

## 📸 Projects Included

- **LegalDost AI** – AI-powered contract risk analyzer  
- **CivicSeva AI** – Civic issue reporting platform  
- **SastaSauda** – Farmer marketplace with AI verification  
- **CloudSaviour** – AI-based cloud monitoring system  
- **News4U** – Personalized news browser extension  

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

## Resume Button Setup

Place your resume in the public folder with this exact name:

```text
public/Anand-Dangi-Resume.pdf
```

The Hero section uses this file for both View Resume and Download Resume buttons.

## Google Sheets Contact Form Setup

1. Open Google Sheets and create a new sheet for contact submissions.
2. Go to Extensions > Apps Script.
3. Replace the default script with the code from [scripts/google-sheets-webhook.gs](scripts/google-sheets-webhook.gs).
4. Click Deploy > New deployment.
5. Choose type Web app and set access to Anyone.
6. Copy the deployed web app URL.
7. Create a `.env` file in project root (or copy `.env.example` to `.env`) and add:

```bash
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec
```

8. Restart the Vite dev server.

Contact form payload fields:

- name
- email
- message
- source
- submittedAt