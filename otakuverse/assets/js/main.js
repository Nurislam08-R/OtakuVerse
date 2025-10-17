// main.js — OtakuVerse Media
// ScrollSpy, smooth scroll, форма с Bootstrap-валидацией и success alert

document.addEventListener('DOMContentLoaded', function () {
  // Enable Bootstrap ScrollSpy
  var spyElements = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  spyElements.forEach(function (spyEl) {
    bootstrap.ScrollSpy.getOrCreateInstance(spyEl);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var y = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Bootstrap form validation + success alert
  var form = document.getElementById('contactForm');
  var alertBox = document.getElementById('contactAlert');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity()) {
        // Show success alert
        alertBox.className = 'alert alert-success';
        alertBox.textContent = 'Спасибо! Ваша заявка отправлена.';
        alertBox.classList.remove('visually-hidden');
        form.reset();
        form.classList.remove('was-validated');
        setTimeout(function () {
          alertBox.classList.add('visually-hidden');
        }, 4000);
      } else {
        form.classList.add('was-validated');
      }
    }, false);
  }

    // Highlight current page link on multi-page site
    try {
      var path = window.location.pathname.split('/').pop();
      if (!path) path = 'index.html';
      document.querySelectorAll('.navbar .nav-link').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href && href.indexOf(path) !== -1) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    } catch (e) {
      // ignore
    }
});
