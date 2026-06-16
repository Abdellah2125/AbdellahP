// script.js

// Language state
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
  en: {
    logo: 'Abdellah',
    nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills',
    nav_services: 'Services', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_greeting: "Hello! I'm Abdellah", hero_title: 'Front-End Web Developer',
    hero_subtitle: 'creating engaging websites and smooth user experiences',
    hero_btn1: 'View My Work', hero_btn2: 'Contact Me',
    about_title: 'About Me',
    about_greeting: "I'm Abdellah Boukelia", about_role: 'a passionate Front-End Developer',
    about_desc1: 'With over <strong>+1 year of experience</strong> in front-end development, I specialize in crafting beautiful, responsive, and user-friendly websites. I turn ideas into reality using the latest web technologies and best practices.',
    about_desc2: 'I believe that great design and smooth functionality go hand in hand. My goal is to create digital experiences that not only look stunning but also perform flawlessly across all devices.',
    stat_projects: 'Projects Completed', stat_clients: 'Happy Clients', stat_satisfaction: 'Client Satisfaction',
    about_btn: "Let's Work Together",
    skills_title: 'Technical Skills',
    skills_frontend: 'Front-End Development', skills_tools: 'Tools & Others',
    skill_responsive: 'Responsive Design', skill_seo: 'SEO Basics', skill_performance: 'Performance Optimization',
    services_title: 'Services',
    service1_title: 'Front-End Development', service1_desc: 'Building modern and clean user interfaces using HTML, CSS, and JavaScript with best coding practices.',
    service2_title: 'UI Implementation', service2_desc: 'Converting Figma and UI designs into responsive and pixel-perfect web interfaces.',
    service3_title: 'Responsive Design', service3_desc: 'Ensuring websites work perfectly across all screen sizes including mobile, tablet, and desktop.',
    service4_title: 'Performance Optimization', service4_desc: 'Improving website speed, Core Web Vitals, and overall user experience.',
    projects_title: 'Featured Projects',
    filter_all: 'All', filter_landing: 'Landing Pages', filter_ecommerce: 'E-commerce', filter_portfolio: 'Portfolios',
    project1_title: 'Sidr Honey Landing Page', project1_desc: 'Landing page for Algerian Sidr honey product - Responsive & Modern Design',
    project2_title: 'Benat Aldaar Kitchen', project2_desc: 'Landing page for a home kitchen - Elegant and Appetizing Design',
    project3_title: 'Argan Oil Product Page', project3_desc: 'Landing page for Algerian Argan oil - Natural & Organic Focus',
    live_demo: 'Live Demo →',
    contact_title: "Let's Connect",
    contact_subtitle: 'Get in touch',
    contact_desc: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    contact_location: 'Algeria',
    name_placeholder: 'Your Name', email_placeholder: 'Your Email', message_placeholder: 'Your Message',
    send_btn: 'Send Message <i class="fas fa-paper-plane"></i>',
    phone_title: 'Phone', email_title: 'Email', whatsapp_title: 'WhatsApp',
    copyright: 'All rights reserved.',
    footer_home: 'Home', footer_about: 'About', footer_skills: 'Skills', footer_contact: 'Contact',
  },
  ar: {
    logo: 'عبدالله',
    nav_home: 'الرئيسية', nav_about: 'عنّي', nav_skills: 'المهارات',
    nav_services: 'الخدمات', nav_projects: 'المشاريع', nav_contact: 'اتصل بي',
    hero_greeting: 'مرحباً! أنا عبدالله', hero_title: 'مطور واجهات أمامية',
    hero_subtitle: 'أصنع مواقع ويب جذابة وتجارب مستخدم سلسة',
    hero_btn1: 'شاهد أعمالي', hero_btn2: 'اتصل بي',
    about_title: 'عنّي',
    about_greeting: 'أنا عبدالله بوكالية', about_role: 'مطور واجهات أمامية شغوف',
    about_desc1: 'مع <strong>+1 سنة خبرة</strong> في تطوير الواجهات الأمامية، أتخصص في بناء مواقع ويب جميلة ومتجاوبة وسهلة الاستخدام. أحول الأفكار إلى واقع باستخدام أحدث تقنيات الويب وأفضل الممارسات.',
    about_desc2: 'أؤمن بأن التصميم الرائع والوظائف السلسة يسيران جنباً إلى جنب. هدفي هو إنشاء تجارب رقمية لا تبدو مذهلة فحسب، بل تعمل بشكل لا تشوبه شائبة عبر جميع الأجهزة.',
    stat_projects: 'المشاريع المنجزة', stat_clients: 'عملاء سعداء', stat_satisfaction: 'رضا العملاء',
    about_btn: 'لنعمل معاً',
    skills_title: 'المهارات التقنية',
    skills_frontend: 'تطوير الواجهات', skills_tools: 'الأدوات وغيرها',
    skill_responsive: 'تصميم متجاوب', skill_seo: 'أساسيات SEO', skill_performance: 'تحسين الأداء',
    services_title: 'الخدمات',
    service1_title: 'تطوير واجهات أمامية', service1_desc: 'بناء واجهات مستخدم حديثة ونظيفة باستخدام HTML و CSS و JavaScript مع أفضل ممارسات البرمجة.',
    service2_title: 'تنفيذ واجهات UI', service2_desc: 'تحويل تصاميم Figma إلى واجهات ويب متجاوبة ومطابقة للتصميم بالكامل.',
    service3_title: 'تصميم متجاوب', service3_desc: 'ضمان عمل المواقع بشكل مثالي على جميع أحجام الشاشات بما في ذلك الجوال والتابلت وسطح المكتب.',
    service4_title: 'تحسين الأداء', service4_desc: 'تحسين سرعة الموقع و Core Web Vitals وتجربة المستخدم بشكل عام.',
    projects_title: 'مشاريع مميزة',
    filter_all: 'الكل', filter_landing: 'صفحات هبوط', filter_ecommerce: 'متاجر', filter_portfolio: 'موارد أعمال',
    project1_title: 'صفحة عسل السدر', project1_desc: 'صفحة هبوط لمنتج عسل السدر الجزائري - تصميم متجاوب وعصري',
    project2_title: 'مطبخ بنات الدار', project2_desc: 'صفحة هبوط لمطبخ منزلي - تصميم أنيق وشهي',
    project3_title: 'صفحة زيت الأركان', project3_desc: 'صفحة هبوط لزيت الأركان الجزائري - تركيز على الطبيعة والعضوية',
    live_demo: 'تجربة حية ←',
    contact_title: 'لنتواصل',
    contact_subtitle: 'تواصل معي',
    contact_desc: 'أنا مهتم دائماً بسماع مشاريع وفرص جديدة. سواء كان لديك سؤال أو تريد فقط إلقاء التحية، فلا تتردد في التواصل!',
    contact_location: 'الجزائر',
    name_placeholder: 'اسمك', email_placeholder: 'بريدك الإلكتروني', message_placeholder: 'رسالتك',
    send_btn: 'أرسل الرسالة <i class="fas fa-paper-plane"></i>',
    phone_title: 'الهاتف', email_title: 'البريد', whatsapp_title: 'واتساب',
    copyright: 'جميع الحقوق محفوظة.',
    footer_home: 'الرئيسية', footer_about: 'عنّي', footer_skills: 'المهارات', footer_contact: 'اتصل بي',
  }
};

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.body.classList.toggle('rtl', lang === 'ar');

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      if (el.placeholder !== undefined) {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setupLanguageSwitcher() {
  const container = document.querySelector('.language-switch');
  if (!container) return;
  container.innerHTML = '';
  ['en', 'ar'].forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn' + (lang === currentLang ? ' active' : '');
    btn.dataset.lang = lang;
    btn.textContent = lang === 'en' ? 'EN' : 'AR';
    btn.addEventListener('click', () => applyLanguage(lang));
    container.appendChild(btn);
  });
}

// Initialize AOS
AOS.init({
  once: true,
  duration: 800,
});

// Initialize language
setupLanguageSwitcher();
applyLanguage(currentLang);

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navigation");
const overlay = document.getElementById("menuOverlay");
const body = document.body;

function toggleMenu() {
  const isActive = nav.classList.toggle("active");
  overlay.classList.toggle("active", isActive);
  body.classList.toggle("no-scroll", isActive);
  
  if (isActive) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-times");
  } else {
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.add("fa-bars");
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
}

if (overlay) {
  overlay.addEventListener("click", toggleMenu);
}

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// Close menu on resize (if going from mobile to desktop)
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && nav.classList.contains("active")) {
    toggleMenu();
  }
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      portfolioCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

function validateField(field) {
  const group = field.closest('.form-group');
  const errorMsg = group.querySelector('.error-message');
  const value = field.value.trim();
  let valid = true;

  if (field.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      errorMsg.textContent = currentLang === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
      valid = false;
    } else if (!emailRegex.test(value)) {
      errorMsg.textContent = currentLang === 'en' ? 'Please enter a valid email' : 'الرجاء إدخال بريد إلكتروني صحيح';
      valid = false;
    }
  } else if (field.tagName === 'TEXTAREA') {
    if (!value) {
      errorMsg.textContent = currentLang === 'en' ? 'Message is required' : 'الرسالة مطلوبة';
      valid = false;
    } else if (value.length < 10) {
      errorMsg.textContent = currentLang === 'en' ? 'Message must be at least 10 characters' : 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل';
      valid = false;
    }
  } else {
    if (!value) {
      errorMsg.textContent = currentLang === 'en' ? 'Name is required' : 'الاسم مطلوب';
      valid = false;
    } else if (value.length < 2) {
      errorMsg.textContent = currentLang === 'en' ? 'Name must be at least 2 characters' : 'يجب أن يحتوي الاسم على حرفين على الأقل';
      valid = false;
    }
  }

  group.classList.toggle('error', !valid);
  group.classList.toggle('success', valid);
  return valid;
}

if (contactForm) {
  const inputs = contactForm.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    const group = input.closest('.form-group');
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    group.appendChild(errorEl);

    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (group.classList.contains('error')) {
        validateField(input);
      }
    });
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let allValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) allValid = false;
    });

    if (!allValid) return;

    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        const message = currentLang === 'en'
          ? 'Thank you for your message! I will get back to you soon.'
          : 'شكراً لرسالتك! سأرد عليك قريباً.';
        alert(message);
        contactForm.reset();
        inputs.forEach(input => {
          input.closest('.form-group').classList.remove('success', 'error');
        });
      } else {
        throw new Error('Formspree error');
      }
    } catch (error) {
      const message = currentLang === 'en'
        ? 'Something went wrong. Please try again or email me directly.'
        : 'حدث خطأ ما. الرجاء المحاولة مرة أخرى أو مراسلتي مباشرة.';
      alert(message);
    }

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  });
}

// Header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Animate progress bars when they come into view
const observerOptions = {
  threshold: 0.3,
  rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress');
      progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100 + (index * 200));
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skills-category').forEach(category => {
  observer.observe(category);
});