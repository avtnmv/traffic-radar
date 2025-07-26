document.addEventListener('DOMContentLoaded', function() {
  // 1. Слайдер отзывов
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '.reviews-swiper .custom-next',
      prevEl: '.reviews-swiper .custom-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },
    on: {
      init: function() {
        initSegmentedProgressBar(this);
      }
    }
  });

  // Initialize segmented progress bar
  function initSegmentedProgressBar(swiper) {
    const progressContainer = document.querySelector('.reviews-swiper .swiper-progress-container');
    if (!progressContainer) return;
    
    // Clear existing progress bars
    progressContainer.innerHTML = '';
    
    // Calculate number of segments needed
    const slidesCount = swiper.slides.length - (swiper.params.slidesPerView - 1);
    
    // Create segments
    for (let i = 0; i < slidesCount; i++) {
      const segment = document.createElement('div');
      segment.classList.add('swiper-progress-bar');
      if (i === 0) segment.classList.add('active');
      progressContainer.appendChild(segment);
    }
  }

  // Update progress bar on slide change
  reviewsSwiper.on('slideChange', function() {
    const progressBars = document.querySelectorAll('.reviews-swiper .swiper-progress-bar');
    progressBars.forEach((bar, index) => {
      if (index <= reviewsSwiper.activeIndex) {
        bar.classList.add('active');
      } else {
        bar.classList.remove('active');
      }
    });
  });

  // Promo slider initialization
  let promoSlider;
  function initPromoSlider() {
    if (window.innerWidth < 1220) {
      if (!promoSlider) {
        promoSlider = new Swiper('.promo-swiper', {
          spaceBetween: 24,
          slidesPerGroup: 1,
          navigation: {
            nextEl: '.promo-swiper .promo-slider__button--next',
            prevEl: '.promo-swiper .promo-slider__button--prev',
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1070: { slidesPerView: 3 },
          }
        });
      }
    } else if (promoSlider) {
      promoSlider.destroy();
      promoSlider = null;
    }
  }

  // Read more functionality
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', function() {
      const slide = this.closest('.slide');
      if (!slide || slide.classList.contains('expanded')) return;
      
      slide.classList.add('expanded');
      slide.style.height = `${slide.scrollHeight}px`;
      this.style.display = 'none';
    });
  });

  // Initialize promo slider and set up resize listener
  initPromoSlider();
  window.addEventListener('resize', initPromoSlider);
});