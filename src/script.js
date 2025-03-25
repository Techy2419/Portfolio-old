// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const body = document.body;
  const icon = themeToggle.querySelector('i');
  
  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(savedTheme);
    
    if (savedTheme === 'light-mode') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      body.classList.add('light-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light-mode');
    }
  });
  
  // Text rotation animation
  window.onload = function () {
  // Text rotation animation
  const TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    let delta = 300 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    
    let that = this;
    setTimeout(function() {
      that.tick();
    }, delta);
  };

  const elements = document.getElementsByClassName('txt-rotate');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};
  
  // Initialize ScrollReveal for animations
  const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out',
    mobile: true,
    reset: false
  });
  
  // Common reveal animations
  sr.reveal('.section-heading', { delay: 200 });
  sr.reveal('.reveal-item', { interval: 100 });
  sr.reveal('.reveal-left', { origin: 'left', interval: 200 });
  sr.reveal('.reveal-right', { origin: 'right', interval: 200 });
  
  // Fix the visibility of about text and achievement text
  setTimeout(() => {
    // Make About section text visible
    const aboutTextElements = document.querySelectorAll('.about-text p');
    aboutTextElements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    });
    
    // Make achievement text visible
    const achievementTexts = document.querySelectorAll('.achievement-card p, .achievement-card h3');
    achievementTexts.forEach(element => {
      element.style.opacity = '1';
    });
  }, 1000);
  
  // Initialize skill hexagons
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Firebase', icon: 'fas fa-database' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];
  
  const skillsContainer = document.querySelector('.skills-container');
  
  if (skillsContainer) {
    skills.forEach(skill => {
      const skillCol = document.createElement('div');
      skillCol.className = 'col-6 col-md-4 col-lg-2 mb-4';
      
      const skillContent = `
        <div class="skill-hexagon reveal-item">
          <i class="${skill.icon} skill-icon"></i>
          <div class="skill-name">${skill.name}</div>
        </div>
      `;
      
      skillCol.innerHTML = skillContent;
      skillsContainer.appendChild(skillCol);
    });
  }
});
