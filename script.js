// ============================================
// OSAMA HAMDI - Portfolio JavaScript
// Advanced GSAP Animations
// ============================================

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ============================================
// Loader Animation
// ============================================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const loaderLogo = document.querySelector('.loader-logo');
  const loaderProgress = document.querySelector('.loader-progress');
  
  // Loader timeline
  const loaderTL = gsap.timeline();
  
  loaderTL
    .to(loaderProgress, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut'
    })
    .to(loaderLogo, {
      scale: 1.2,
      duration: 0.3,
      ease: 'back.out'
    })
    .to(loaderLogo, {
      scale: 0,
      opacity: 0,
      duration: 0.3
    })
    .to(loader, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        document.body.classList.remove('loading');
        initAllAnimations();
      }
    });
});

// ============================================
// Initialize All Animations After Load
// ============================================
function initAllAnimations() {
  initHeroAnimations();
  initNavigation();
  initParticles();
  initScrollAnimations();
  initProjectAnimations();
  initSkillAnimations();
  initContactAnimations();
  initCursor();
  initMagneticButtons();
  initTextReveal();
  initBackToTop();
  initSmoothScroll();
}

// ============================================
// Hero Section Animations
// ============================================
function initHeroAnimations() {
  // Set initial states
  gsap.set(['.hero-badge', '.hero-greeting', '.name-first', '.name-last', 
            '.typing-wrapper', '.hero-description', '.hero-buttons .btn', 
            '.hero-social .social-link', '.profile-image-wrapper', 
            '.profile-image-border', '.profile-image-glow', '.float-icon', 
            '.scroll-indicator'], {
    opacity: 1
  });
  
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  // Hero badge
  heroTL.from('.hero-badge', {
    opacity: 0,
    y: 30,
    duration: 0.8
  })
  
  // Hero title - character by character
  .from('.hero-greeting', {
    opacity: 0,
    y: 50,
    duration: 0.6
  }, '-=0.3')
  
  .from('.name-first', {
    opacity: 0,
    x: -100,
    rotationY: 90,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }, '-=0.2')
  
  .from('.name-last', {
    opacity: 0,
    x: 100,
    rotationY: -90,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }, '-=0.6')
  
  // Typing effect wrapper
  .from('.typing-wrapper', {
    opacity: 0,
    y: 20,
    duration: 0.5
  }, '-=0.3')
  
  .from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 0.6
  }, '-=0.2')
  
  // Buttons with stagger
  .from('.hero-buttons .btn', {
    opacity: 0,
    y: 40,
    scale: 0.8,
    stagger: 0.15,
    duration: 0.6,
    ease: 'back.out(1.7)'
  }, '-=0.3')
  
  // Social links
  .from('.hero-social .social-link', {
    opacity: 0,
    y: 30,
    scale: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(2)'
  }, '-=0.3')
  
  // Profile image
  .from('.profile-image-wrapper', {
    opacity: 0,
    scale: 0.5,
    rotation: -10,
    duration: 1,
    ease: 'back.out(1.7)'
  }, '-=0.8')
  
  .from('.profile-image-border', {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  
  .from('.profile-image-glow', {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  
  // Floating icons
  .from('.float-icon', {
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(2)'
  }, '-=0.5')
  
  // Scroll indicator
  .from('.scroll-indicator', {
    opacity: 0,
    y: 20,
    duration: 0.5
  }, '-=0.2');
  
  // Start typing effect after animations
  setTimeout(initTypingEffect, 1500);
  
  // Continuous floating animation for icons
  gsap.to('.float-icon', {
    y: -15,
    duration: 2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: {
      each: 0.2,
      from: 'random'
    }
  });
  
  // Code window subtle animation
  gsap.to('.code-window', {
    y: -10,
    duration: 3,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });
}

// ============================================
// Typing Effect
// ============================================
function initTypingEffect() {
  const typingElement = document.getElementById('typing');
  if (!typingElement) return;
  
  const texts = [
    'Junior Full-Stack .NET Developer',
    'C# & SQL Server Specialist',
    'Problem Solver',
    'Computer Science Student'
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
  const header = document.querySelector('.header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });
  
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate menu items
    if (navMenu.classList.contains('active')) {
      gsap.from('.nav-menu .nav-link', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  });
  
  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ============================================
// Particles Background
// ============================================
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 4 + 2}px`;
    particle.style.height = particle.style.width;
    container.appendChild(particle);
    
    // Animate each particle
    gsap.to(particle, {
      x: `random(-100, 100)`,
      y: `random(-100, 100)`,
      opacity: `random(0.3, 1)`,
      duration: `random(10, 20)`,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}

// ============================================
// Scroll-triggered Animations
// ============================================
function initScrollAnimations() {
  // Section headers animation
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.children, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
  
  // About section
  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Stat cards with counter animation
  gsap.utils.toArray('.stat-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        onEnter: () => animateStatNumber(card)
      },
      opacity: 0,
      y: 60,
      scale: 0.8,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'back.out(1.7)'
    });
  });
  
  // Timeline items
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
  
  // Contact cards
  gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      rotationX: -30,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });
}

// Animate stat numbers
function animateStatNumber(card) {
  const numberEl = card.querySelector('.stat-number');
  if (!numberEl || numberEl.classList.contains('animated')) return;
  
  const target = numberEl.textContent;
  const isDecimal = target.includes('.');
  const numTarget = parseFloat(target);
  
  numberEl.classList.add('animated');
  
  gsap.from(numberEl, {
    textContent: 0,
    duration: 2,
    ease: 'power2.out',
    snap: { textContent: isDecimal ? 0.01 : 1 },
    onUpdate: function() {
      const val = parseFloat(this.targets()[0].textContent);
      numberEl.textContent = isDecimal ? val.toFixed(2) : Math.floor(val) + '+';
    },
    onComplete: () => {
      numberEl.textContent = target;
    }
  });
}

// ============================================
// Project Cards Animations
// ============================================
function initProjectAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, i) => {
    // Initial animation on scroll
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 100,
      rotationY: -15,
      scale: 0.9,
      duration: 0.8,
      delay: i * 0.15,
      ease: 'power3.out'
    });
    
    // Hover animations
    const image = card.querySelector('.project-image');
    const overlay = card.querySelector('.project-overlay');
    const content = card.querySelector('.project-content');
    const tags = card.querySelectorAll('.project-tags span');
    const features = card.querySelectorAll('.project-features span');
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -15,
        scale: 1.02,
        boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)',
        duration: 0.4,
        ease: 'power2.out'
      });
      
      gsap.to(image, {
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.out'
      });
      
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3
      });
      
      gsap.to(tags, {
        scale: 1.05,
        stagger: 0.05,
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        duration: 0.4,
        ease: 'power2.out'
      });
      
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
      
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3
      });
      
      gsap.to(tags, {
        scale: 1,
        duration: 0.3
      });
    });
  });
}

// ============================================
// Skill Bars Animation
// ============================================
function initSkillAnimations() {
  const skillCategories = document.querySelectorAll('.skill-category');
  
  skillCategories.forEach((category, catIndex) => {
    // Category entrance animation
    gsap.from(category, {
      scrollTrigger: {
        trigger: category,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        onEnter: () => animateSkillBars(category, catIndex)
      },
      opacity: 0,
      y: 80,
      rotationX: -15,
      duration: 0.8,
      delay: catIndex * 0.1,
      ease: 'power3.out'
    });
    
    // Category header animation
    const header = category.querySelector('.category-header');
    gsap.from(header, {
      scrollTrigger: {
        trigger: category,
        start: 'top 85%'
      },
      opacity: 0,
      x: -50,
      duration: 0.6,
      delay: catIndex * 0.1 + 0.2
    });
    
    // Skill items hover effects
    const skillItems = category.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          x: 10,
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        });
        
        gsap.to(item.querySelector('.skill-icon'), {
          scale: 1.2,
          rotate: 10,
          duration: 0.3,
          ease: 'back.out(2)'
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          x: 0,
          backgroundColor: 'transparent',
          duration: 0.3
        });
        
        gsap.to(item.querySelector('.skill-icon'), {
          scale: 1,
          rotate: 0,
          duration: 0.3
        });
      });
    });
  });
}

function animateSkillBars(category, catIndex) {
  const bars = category.querySelectorAll('.skill-progress');
  
  bars.forEach((bar, i) => {
    const progress = bar.style.getPropertyValue('--progress') || bar.getAttribute('style').match(/--progress:\s*(\d+%)/)?.[1];
    
    gsap.fromTo(bar, 
      { width: '0%' },
      {
        width: progress,
        duration: 1.2,
        delay: catIndex * 0.2 + i * 0.15,
        ease: 'power3.out'
      }
    );
    
    // Add glow effect
    gsap.to(bar, {
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
      duration: 0.5,
      delay: catIndex * 0.2 + i * 0.15 + 1
    });
  });
}

// ============================================
// Contact Section Animations
// ============================================
function initContactAnimations() {
  // CTA card animation
  gsap.from('.cta-card', {
    scrollTrigger: {
      trigger: '.cta-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.9,
    y: 50,
    duration: 0.8,
    ease: 'back.out(1.7)'
  });
  
  // Social buttons
  gsap.from('.contact-social .social-btn', {
    scrollTrigger: {
      trigger: '.contact-social',
      start: 'top 90%'
    },
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(2)'
  });
}

// ============================================
// Custom Cursor
// ============================================
function initCursor() {
  // Create cursor elements
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
  document.body.appendChild(cursor);
  
  const dot = cursor.querySelector('.cursor-dot');
  const outline = cursor.querySelector('.cursor-outline');
  
  // Add cursor styles
  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
      mix-blend-mode: difference;
    }
    .cursor-dot {
      width: 8px;
      height: 8px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .cursor-outline {
      width: 40px;
      height: 40px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;
    }
    .cursor-hover .cursor-outline {
      width: 60px;
      height: 60px;
      border-color: #6366f1;
      background: rgba(99, 102, 241, 0.1);
    }
    .cursor-hover .cursor-dot {
      transform: translate(-50%, -50%) scale(2);
      background: #6366f1;
    }
    @media (max-width: 768px) {
      .custom-cursor { display: none; }
    }
  `;
  document.head.appendChild(style);
  
  // Move cursor
  document.addEventListener('mousemove', (e) => {
    gsap.to(dot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
    gsap.to(outline, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
  });
  
  // Hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .nav-link');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
}

// ============================================
// Magnetic Buttons
// ============================================
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('.btn, .social-link, .social-btn, .nav-cta');
  
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });
  
  // Add ripple effect to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        transform: scale(0);
      `;
      
      this.appendChild(ripple);
      
      gsap.to(ripple, {
        scale: 4,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      });
    });
  });
}

// ============================================
// Text Reveal Animation
// ============================================
function initTextReveal() {
  // Highlight text animations
  gsap.utils.toArray('.highlight, .gradient-text').forEach(text => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      backgroundSize: '0% 100%',
      duration: 0.8,
      ease: 'power2.out'
    });
  });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  
  // Initial state
  gsap.set(backToTop, { opacity: 0, scale: 0.5 });
  
  // Show/hide on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      gsap.to(backToTop, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
        pointerEvents: 'auto'
      });
      backToTop.classList.add('visible');
    } else {
      gsap.to(backToTop, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        pointerEvents: 'none'
      });
      backToTop.classList.remove('visible');
    }
  });
  
  // Click to scroll
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Hover animation
  backToTop.addEventListener('mouseenter', () => {
    gsap.to(backToTop, {
      y: -5,
      scale: 1.1,
      duration: 0.3
    });
  });
  
  backToTop.addEventListener('mouseleave', () => {
    gsap.to(backToTop, {
      y: 0,
      scale: 1,
      duration: 0.3
    });
  });
}

// ============================================
// Smooth Scroll - Fixed for mailto links
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal anchor links (not # alone)
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      // Let mailto: and other links work normally (don't prevent default)
    });
  });
}

// ============================================
// Parallax Effects
// ============================================
ScrollTrigger.create({
  trigger: '.hero-bg',
  start: 'top top',
  end: 'bottom top',
  scrub: 1,
  animation: gsap.to('.hero-bg', {
    y: 200,
    opacity: 0.5
  })
});

// Float icons parallax
gsap.utils.toArray('.float-icon').forEach((icon, i) => {
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    animation: gsap.to(icon, {
      y: 100 + i * 20,
      rotate: 360
    })
  });
});

// ============================================
// Footer Animation
// ============================================
ScrollTrigger.create({
  trigger: '.footer',
  start: 'top 90%',
  onEnter: () => {
    gsap.from('.footer-content > *', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out'
    });
  },
  once: true
});

// ============================================
// Console Message
// ============================================
console.log('%c Welcome to Osama Hamdi\'s Portfolio! ', 'background: linear-gradient(90deg, #6366f1, #8b5cf6); color: white; padding: 10px 20px; border-radius: 5px; font-size: 14px; font-weight: bold;');
console.log('%c Built with ❤️ using GSAP ', 'color: #6366f1; font-size: 12px;');
