# DevOps Engineer Personal Portfolio

A sleek, modern, and highly interactive personal portfolio built for a DevOps Engineer. Designed with performance and aesthetics in mind, this project leverages the power of React, Vite, Tailwind CSS, and Framer Motion to deliver a smooth and engaging user experience.

---

## 🚀 Features

- **Modern Tech Stack**: Fast and optimized builds with React and Vite.
- **Engaging UI/UX**: Smooth animations and transitions powered by `framer-motion`.
- **Responsive Design**: Fully responsive layout tailored for all screen sizes (mobile, tablet, desktop) using Tailwind CSS.
- **Rich Sections**:
  - Interactive Hero Section with 3D isometric icons
  - Professional Overview
  - Skills & Skill Charts (via Recharts)
  - Projects Portfolio
  - Education & Certifications
  - Content/Articles Section
  - Contact Form
- **Custom Graphics**: Includes 3D graphics rendered with `three.js` and `@react-three/fiber` for a cutting-edge feel.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Data Visualization**: Recharts
- **Icons**: React Icons

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** (v18.x or higher is recommended)
- **npm** or **yarn** or **pnpm** (npm is used by default)
- **Docker** (Optional, if you wish to run it in a containerized environment)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sachilz/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: If you encounter vulnerabilities, you can run `npm audit fix` as suggested by npm).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Alternatively, you can use the provided startup script:
   ```bash
   bash start.sh
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```text
.
├── public/                 # Static assets (images, PDFs, etc.)
├── src/                    # Source files
│   ├── assets/             # Project-specific static assets
│   ├── components/         # Reusable React components (Navbar, HeroSection, etc.)
│   ├── App.jsx             # Main Application component
│   ├── App.css             # App-specific styling
│   ├── index.css           # Global Tailwind & base styling
│   └── main.jsx            # Application entry point
├── Dockerfile              # Docker configuration for containerization
├── docker-compose.yml      # Docker Compose configuration
├── start.sh                # Bash script to automate local/Docker startup
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and npm scripts
└── README.md               # Project documentation
```

## 🐳 Docker Support

This project includes Docker support for easy deployment and testing.

To run the application using Docker Compose:
```bash
docker-compose up --build
```
This will build the image and start the application on the configured port.

## 📬 Contact & Links

- **GitHub**: [@sachilz](https://github.com/sachilz)
- **LinkedIn**: [Sachintha](https://www.linkedin.com/in/sachilz/)
- **YouTube**: [NextOpz](https://www.youtube.com/@NextOpz)
- **Medium**: [@dilshansachiya671_17974](https://medium.com/@dilshansachiya671_17974)

---

*Automate. Scale. Deploy.*
