import menuTemplate from '../templates/menu-card.hbs';
import menuData from '../menu.json';

function createMenuMarkup(cards) {
    return cards.map(menuTemplate).join('');
};

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', createMenuMarkup(menuData));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeButtonEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

themeButtonEl.addEventListener('change', switchTheme)

function switchTheme(e) {
    if (e.target.checked === true) {
        // console.log(e.target.checked);
        bodyEl.classList.add(Theme.DARK);
        // localStorage.removeItem('Theme');
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
        // localStorage.removeItem('Theme');
        localStorage.setItem('Theme', Theme.LIGHT);
    }
};