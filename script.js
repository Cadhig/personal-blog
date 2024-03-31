
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const textBody = document.querySelector('#text-body');
const submitButton = document.querySelector('#submit')
const msgContainer = document.querySelector('#msg')

submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    const username = usernameInput.value;
    const title = titleInput.value;
    const body = textBody.value;

    // error messages for blank boxes
    function showMessage(type, message) {
        msgContainer.textContent = message;
        msgContainer.setAttribute('class', type)
    }

    if (username === '') {
        showMessage('error', 'Please enter a username.')
        event.preventDefault()
        return;
    } else if (title === '') {
        showMessage('error', 'Please enter a title')
        event.preventDefault()
        return;
    } else if (body === '') {
        showMessage('error', 'Please enter body text')
        event.preventDefault()
        return;
    }

    // linking for submission to posts page, appearing on screen
    const post = {
        username: username,
        title: title,
        body: body,
    }

    let postStorage = []

    if (localStorage.getItem('posts') !== null) {

        postStorage = JSON.parse(localStorage.getItem('posts'))
    }


    postStorage.push(post)

    const stringifiedPost = JSON.stringify(postStorage)
    localStorage.setItem('posts', stringifiedPost)
    window.location.href = '/posts/index.html'

});

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