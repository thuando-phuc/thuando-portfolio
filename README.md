# Professional Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for showcasing experience, projects, awards, and contact information
- Easy to customize and update
- Optimized for GitHub Pages deployment

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- Framer Motion for animations
- React Router for navigation
- React Icons
- React Vertical Timeline Component

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Personal Information

Update your personal information in the following files:
- `src/pages/Home.jsx` - Update your name, title, about section, and contact information
- `src/pages/Experience.jsx` - Add your work experience and education
- `src/pages/Awards.jsx` - Add your awards, certifications, and activities
- `src/pages/Projects.jsx` - Add your projects with descriptions and links

### Styling

The website uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements in the `tailwind.config.js` file.

## Deployment

This project is configured for easy deployment to GitHub Pages.

1. Update the `base` property in `vite.config.js` to match your repository name:
```js
base: '/your-repo-name/'
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Vertical Timeline Component](https://github.com/stephane-monnot/react-vertical-timeline)