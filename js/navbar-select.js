  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function (e) {
      document.querySelectorAll('.nav-list a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });