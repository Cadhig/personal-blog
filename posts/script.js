const postsContainer = document.getElementById('main')
const postsEl = document.createElement('div')
postsEl.classList.add('post')
const title = document.createElement('h2')
title.textContent = 'My Title';
const body = document.createElement('p')
body.textContent = 'body!!!!!!!!!!!!';
const author = document.createElement('p')
author.textContent = 'Posted by: Cadence';

const backButton = document.getElementById('back')




// post box
console.log(postsEl)
const post = {
    title: 'Post Title',
    body: 'Body',
    author: 'Posted by: Cadence',
    createdAt: '3/27/2024',
}

let posts = [{ title: 'weiner', body: 'boob', author: 'posted by me' }, { title: 'pinot', body: 'is a poo head', author: 'posted by pinots biggest hater' }, { title: '312313', body: 'b3333ob', author: 'posted551412 by me' }, post]

for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i]
    const postsContainer = document.getElementById('main')
    const postsEl = document.createElement('div')
    postsEl.classList.add('post')
    const title = document.createElement('h2')
    title.textContent = currentPost.title;
    const body = document.createElement('p')
    body.textContent = currentPost.body
    const author = document.createElement('p')
    author.textContent = currentPost.author;

    postsEl.appendChild(title);
    postsEl.appendChild(body);
    postsEl.appendChild(author);
    postsContainer.appendChild(postsEl)

}

// theme switcher
const container = document.querySelector('.container')
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