document.addEventListener("DOMContentLoaded", () => {
  const descriptions = document.querySelectorAll('.about__description');
  if (!descriptions.length) return;

  descriptions.forEach(desc => {
    const text = desc.textContent;
    desc.innerHTML = '';

    for (const char of text) {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.color = '#505050';
      span.style.transition = 'color 0.3s ease';
      desc.appendChild(span);
    }
  });

  window.addEventListener('scroll', () => {
    descriptions.forEach(desc => {
      const spans = desc.querySelectorAll('span');
      const total = spans.length;
      const rect = desc.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        progress = 1 - (rect.top / windowHeight);
        progress = Math.min(Math.max(progress, 0), 1);
      }

      const extendedProgress = Math.min(Math.pow(progress, 0.8) * 3, 3);
      let lettersToFill = Math.floor(total * extendedProgress);
      lettersToFill = Math.min(lettersToFill, total);

      for (let i = 0; i < total; i++) {
        spans[i].style.color = i < lettersToFill ? '#FFFFFF' : '#505050';
      }
    });
  });
});


  document.addEventListener('DOMContentLoaded', function() {
    const statsItems = document.querySelectorAll('.stats__item');
    
    function animateOnScroll() {
      statsItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0;
        
        if (isVisible) {
          item.classList.add('stats__item--animated');
        } else {
          item.classList.remove('stats__item--animated');
        }
      });
    }
    
    // Запускаем при загрузке и при скролле
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });