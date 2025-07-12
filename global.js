// Global JavaScript for Cybersecurity Portfolio

// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateThemeIcon();
  }

  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = this.theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
    }
  }
}

// Mobile Menu Management
class MobileMenu {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.init();
  }

  init() {
    if (this.hamburger && this.mobileMenu) {
      this.hamburger.addEventListener('click', () => this.toggle());
      
      // Close menu when clicking on a link
      const mobileLinks = this.mobileMenu.querySelectorAll('.mobile-nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => this.close());
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.hamburger.contains(e.target) && !this.mobileMenu.contains(e.target)) {
          this.close();
        }
      });
    }
  }

  toggle() {
    this.hamburger.classList.toggle('active');
    this.mobileMenu.classList.toggle('active');
  }

  close() {
    this.hamburger.classList.remove('active');
    this.mobileMenu.classList.remove('active');
  }
}

// Mobile Side Panel Management
class MobileSidePanel {
  constructor() {
    this.toggleButton = document.querySelector('.side-panel-toggle');
    this.sidePanel = document.querySelector('.side-panel');
    this.overlay = document.querySelector('.side-panel-overlay');
    this.init();
  }

  init() {
    if (this.toggleButton && this.sidePanel) {
      this.toggleButton.addEventListener('click', () => this.toggle());
      
      // Close panel when clicking overlay
      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.close());
      }

      // Close panel when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.toggleButton.contains(e.target) && 
            !this.sidePanel.contains(e.target) && 
            this.sidePanel.classList.contains('active')) {
          this.close();
        }
      });

      // Close panel on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.sidePanel.classList.contains('active')) {
          this.close();
        }
      });

      // Initialize side panel dropdowns
      this.initDropdowns();
    }
  }

  initDropdowns() {
    const sidePanelLinks = document.querySelectorAll('.side-panel-link');
    
    sidePanelLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close other open dropdowns
        sidePanelLinks.forEach(l => {
          if (l !== link) {
            l.classList.remove('open');
          }
        });
        
        // Toggle current dropdown
        link.classList.toggle('open');
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.side-panel')) {
        sidePanelLinks.forEach(link => {
          link.classList.remove('open');
        });
      }
    });

    // Highlight active page in side panel
    const currentPath = window.location.pathname;
    const sidePanelDropdownLinks = document.querySelectorAll('.side-panel-dropdown a');
    
    sidePanelDropdownLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href.replace('./', ''))) {
        link.classList.add('active');
        // Open the parent dropdown
        const parentLink = link.closest('.side-panel-dropdown').previousElementSibling;
        if (parentLink) {
          parentLink.classList.add('open');
        }
      }
    });
  }

  toggle() {
    this.sidePanel.classList.toggle('active');
    this.toggleButton.classList.toggle('active');
    if (this.overlay) {
      this.overlay.classList.toggle('active');
    }
  }

  close() {
    this.sidePanel.classList.remove('active');
    this.toggleButton.classList.remove('active');
    if (this.overlay) {
      this.overlay.classList.remove('active');
    }
  }
}



// Smooth Scrolling
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Active Navigation Highlighting
class NavigationHighlighter {
  constructor() {
    this.init();
  }

  init() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || 
          (currentPath.endsWith('/') && href === 'index.html') ||
          (currentPath.includes('writeups') && href.includes('writeups')) ||
          (currentPath.includes('projects') && href.includes('projects'))) {
        link.classList.add('active');
      }
    });
  }
}

// Fade In Animation
class FadeInAnimation {
  constructor() {
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.card, .hero-content, .project-card, .writeup-card');
    elements.forEach(el => observer.observe(el));
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  const themeManager = new ThemeManager();
  
  // Add theme toggle event listener
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => themeManager.toggle());
  }

  // Initialize mobile menu
  new MobileMenu();

  // Initialize mobile side panel
  new MobileSidePanel();


  // Initialize smooth scrolling
  new SmoothScroll();

  // Initialize navigation highlighting
  new NavigationHighlighter();

  // Initialize fade in animations
  new FadeInAnimation();

  // Add fade-in class to body for initial animation
  document.body.classList.add('fade-in');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = '👋 Come back! - Osezua';
  } else {
    document.title = document.title.replace('👋 Come back! - ', '');
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K to toggle theme
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.click();
    }
  }
  
  // Escape to close mobile menu
  if (e.key === 'Escape') {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      const hamburger = document.querySelector('.hamburger');
      if (hamburger) {
        hamburger.click();
      }
    }
  }
}); 