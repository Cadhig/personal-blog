
// theme switcher
const container = document.querySelector('.main-container')
const themeSwitch = document.querySelector('.theme')

let mode = 'light';

function switchTheme() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
}

themeSwitch.addEventListener('click', switchTheme);