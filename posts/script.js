const postsContainer = document.getElementById('main')
const postsEl = document.createElement('div')
postsEl.classList.add('post')
const title = document.createElement('h2')
const body = document.createElement('p')
const author = document.createElement('p')


const backButton = document.getElementById('back')


// posts 
console.log(postsEl)

let posts = []

if (localStorage.getItem('posts') !== null) {
    posts = JSON.parse(localStorage.getItem('posts'))
}

for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i]
    const postsContainer = document.getElementById('main')
    const postsEl = document.createElement('div')
    postsEl.classList.add('post')
    const title = document.createElement('h2')
    title.textContent = currentPost.title;
    const body = document.createElement('p')
    body.textContent = currentPost.body
    const username = document.createElement('p')
    username.textContent = 'posted by: ' + currentPost.username;

    postsEl.appendChild(title);
    postsEl.appendChild(body);
    postsEl.appendChild(username);
    postsContainer.appendChild(postsEl)

}

// theme switcher
const container = document.querySelector('.container')
const themeSwitch = document.querySelector('.theme')

let mode = 'light';

function switchTheme() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', mode);
    }
    else {
        mode = 'light';
        container.setAttribute('class', mode);
    }
}

themeSwitch.addEventListener('click', switchTheme);