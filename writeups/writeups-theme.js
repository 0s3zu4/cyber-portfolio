// Writeups Theme JavaScript - Specific functionality for writeup pages
// This file complements global.js and provides writeup-specific interactions

// Side Panel Dropdowns - Enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize side panel dropdowns
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

  // Highlight active writeup in side panel
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

  // Add smooth scrolling to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
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

  // Add copy functionality to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    block.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        // Show a brief "copied" message
        const originalText = block.textContent;
        block.textContent = 'Copied!';
        block.style.color = '#1aff99';
        
        setTimeout(() => {
          block.textContent = originalText;
          block.style.color = '';
        }, 1000);
      });
    });
    
    // Add cursor pointer to indicate clickable
    block.style.cursor = 'pointer';
  });

  // Add image zoom functionality
  const images = document.querySelectorAll('main.writeup-plain img');
  images.forEach(img => {
    img.addEventListener('click', () => {
      // Create modal for image zoom
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
      `;
      
      const modalImg = document.createElement('img');
      modalImg.src = img.src;
      modalImg.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
      `;
      
      modal.appendChild(modalImg);
      document.body.appendChild(modal);
      
      // Close modal on click
      modal.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
    
    // Add cursor pointer to indicate clickable
    img.style.cursor = 'pointer';
  });

  // Add table of contents functionality for long writeups
  const headings = document.querySelectorAll('main.writeup-plain h2, main.writeup-plain h3');
  if (headings.length >= 3) {
    // Create side panel for table of contents
    const tocSidePanel = document.createElement('aside');
    tocSidePanel.className = 'toc-side-panel';
    tocSidePanel.innerHTML = `
      <div class="toc-title">Table of Contents</div>
      <ul class="toc-list">
        ${Array.from(headings).map((heading, index) => {
          const id = heading.id || `heading-${index}`;
          heading.id = id;
          return `<li><a href="#${id}">${heading.textContent}</a></li>`;
        }).join('')}
      </ul>
    `;
    
    // Insert TOC side panel before the main content
    const mainContent = document.querySelector('main.writeup-plain');
    if (mainContent) {
      mainContent.parentNode.insertBefore(tocSidePanel, mainContent);
    }
    
    // Add class to main content for side panel layout
    mainContent.classList.add('with-toc');
  }
});

