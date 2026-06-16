// script.js

// Initialize AOS
AOS.init({
  once: true,
  duration: 800,
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navigation");

function toggleMenu() {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
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

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      toggleMenu();
    }
  });
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
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.8)';
  }
});

// Animate progress bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skills-category').forEach(category => {
  observer.observe(category);
});