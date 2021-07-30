import menuTemplate from './templates/menu-card.hbs';
import menuData from './menu.json';

const createMenuMarkup = menuTemplate(menuData);

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', createMenuMarkup);

const themeButtonEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

themeButtonEl.addEventListener('change', switchTheme)

function switchTheme(e) {
    if (e.target.checked) {
        bodyEl.classList.remove(Theme.LIGHT);
        bodyEl.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

if (localStorage.getItem('theme') === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    themeButtonEl.checked = true;
};
