  const translations = {
    en: {
      about: "About Us",
      offers: "Top Offers",
      tools: "Tools",
      bonuses: "Bonuses",
      reviews: "Reviews",
      contacts: "Contacts",
      login: "Login",
      partner: "become a partner"
    },
    ru: {
      about: "Про нас",
      offers: "Топ офферы",
      tools: "Инструменты",
      bonuses: "Бонусы",
      reviews: "Отзывы",
      contacts: "Контакты",
      login: "ВХОД",
      partner: "Стать партнером"
    },
    ua: {
      about: "Про нас",
      offers: "Топ-офери",
      tools: "Інструменти",
      bonuses: "Бонуси",
      reviews: "Відгуки",
      contacts: "Контакти",
      login: "ВХІД",
      partner: "Стати партнером"
    }
  };

  const switcher = document.querySelector('.language-switcher');
  const toggleBtn = switcher.querySelector('.lang-toggle');
  const currentLangText = document.getElementById('current-lang');

  toggleBtn.addEventListener('click', () => {
    switcher.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove('open');
    }
  });

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key];
    });

    currentLangText.textContent = lang.toUpperCase();
    localStorage.setItem('lang', lang);
    switcher.classList.remove('open');
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const savedLang = localStorage.getItem('lang') || 'ru';
  setLanguage(savedLang);
