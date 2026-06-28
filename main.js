/* Expansion Healthcare Partners — main.js */

(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    /* Close nav when a link is clicked */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close nav on outside click */
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Contact form (demo — no backend) ---------- */
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form && successMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Basic validation */
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(function (field) {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--pink)';
          valid = false;
        }
      });

      if (!valid) {
        const firstInvalid = form.querySelector('[required]:placeholder-shown, [required][value=""]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      /* Simulate submission */
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 900);
    });

    /* Clear error highlight on input */
    form.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('input', function () {
        el.style.borderColor = '';
      });
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      const samePage = href.slice(0, hashIndex) === '' || href.slice(0, hashIndex) === window.location.pathname.split('/').pop();

      if (samePage && hash.length > 1) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const navH = document.querySelector('.nav') ? document.querySelector('.nav').offsetHeight : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - navH - 24;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- Scroll-in animation ---------- */
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = `
      .card, .team-card, .testimonial-card, .service-block, .value-item {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity .5s ease, transform .5s ease;
      }
      .card.visible, .team-card.visible, .testimonial-card.visible,
      .service-block.visible, .value-item.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.card, .team-card, .testimonial-card, .service-block, .value-item').forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
      observer.observe(el);
    });
  }

})();
