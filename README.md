# Osezua's Cybersecurity Portfolio

A modern, responsive cybersecurity portfolio showcasing penetration testing writeups, security research, and professional experience.

## 🎨 Features

### Design System
- **Dark/Light Mode Toggle** - Switch between themes with persistent preference
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations
- **Consistent Navigation** - Global header with hamburger menu for mobile

### Navigation
- **Global Header** - Fixed navigation with logo, menu items, and theme toggle
- **Mobile Menu** - Hamburger menu for smaller screens
- **Side Panel** - Category-based navigation for writeups (desktop)
- **Breadcrumb Navigation** - Easy navigation between sections

### Content Sections
- **Home** - Hero section with skills, certifications, and recent work
- **Writeups** - Detailed vulnerability analysis and exploitation guides
- **Projects** - Security tools, scripts, and research projects

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through the sections using the global navigation

## 📁 File Structure

```
cyber-portfolio/
├── index.html              # Homepage
├── writeups.html           # Writeups overview
├── projects.html           # Projects showcase
├── global.css              # Global styles and theme system
├── global.js               # Global JavaScript functionality
├── images/                 # Images and assets
├── writeups/               # Individual writeup pages
│   ├── writeups-theme.css  # Writeup-specific styles
│   ├── writeups-theme.js   # Writeup functionality
│   └── [writeup files]     # Individual writeup HTML files
└── Projects/               # Project-specific pages
```

## 🎯 Key Features

### Theme System
- CSS custom properties for consistent theming
- Dark mode as default (cybersecurity aesthetic)
- Light mode option for accessibility
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Optimized typography scaling

### Interactive Elements
- Matrix rain background effect
- Hover animations on cards and buttons
- Smooth scrolling navigation
- Loading animations

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter + Fira Code)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

### Colors
The theme system uses CSS custom properties defined in `global.css`:

```css
:root {
  --bg-primary: #0a0a12;      /* Background */
  --text-primary: #e0f7fa;    /* Text */
  --accent: #00f0ff;          /* Accent color */
  --border: #23272e;          /* Borders */
}
```

### Adding New Pages
1. Copy the basic HTML structure from existing pages
2. Include `global.css` and `global.js`
3. Use the standard header and footer components
4. Follow the established content patterns

## 📝 Content Guidelines

### Writeups
- Use clear, descriptive titles
- Include difficulty and category tags
- Provide step-by-step exploitation guides
- Include relevant screenshots and code examples
- Add success indicators for completed challenges

### Projects
- Include project icons and descriptions
- Add relevant technology tags
- Provide links to GitHub repositories
- Include difficulty levels and categories

## 🔧 Development

### Local Development
1. Use a local web server (e.g., `python -m http.server 8000`)
2. Test responsive design across different screen sizes
3. Verify theme switching functionality
4. Check accessibility features

### Deployment
- Optimize images for web
- Minify CSS and JavaScript for production
- Test all links and navigation
- Verify mobile responsiveness

## 📄 License

This portfolio is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the portfolio.

---

**Osezua** - Cybersecurity Professional | Penetration Tester | Security Researcher 