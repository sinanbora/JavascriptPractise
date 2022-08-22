const form = document.querySelector('.signup-form');
const message = document.querySelector('.message')
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(form.username.value);
    //console.log(username.value)
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/; 
    if (usernamePattern.test(username)) {
        message.textContent = 'that username is valid'
    }
    else {
        message.textContent = 'username between 6-12 characters'
    }
})

// regex
const pattern = /^[A-Z][a-z]{6,}/;

let result = pattern.test(username);
if (result) {
    console.log('Şifre geçerli')
}
else{
    console.log('Şifre geçersiz')
}

//live feedback

form.username.addEventListener('keyup', e => {
    if (pattern.test(e.target.value)) {
        form.username.setAttribute('class','success')
    } else {
        form.username.setAttribute('class','error')
    }
})

const info = document.querySelector('.info');
const button = document.querySelector('.bigger');

button.addEventListener('click', e =>{
    info.setAttribute('class', 'text-xl')
})
