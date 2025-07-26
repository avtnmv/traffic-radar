const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");
const burgerLinks = document.querySelectorAll('.burger-menu a');

let scrollPosition = 0;

const toggleMenu = () => {
    const show = !burgerMenu.classList.contains('show');

    if (show) {
        // Открываем меню — сохраняем позицию и блокируем прокрутку
        scrollPosition = window.scrollY;
        document.body.classList.add('no-scroll');
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        // Закрываем меню — восстанавливаем позицию
        document.body.classList.remove('no-scroll');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
    }

    burgerMenu.classList.toggle('show', show);
    burgerIcon.classList.toggle('active', show);
};

burgerIcon.addEventListener('click', toggleMenu);
burgerLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
