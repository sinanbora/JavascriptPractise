
const ul = document.querySelector('.people');
let age = 32;
let year = 1988;
console.log(age, year);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

let result = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(result)

//type conversion
let score = '100';
score = Number(score);
console.log(score +1)

// arrow function
const area = (radius) => {
    return 3.14*radius**2;
}
const area1 = (radius) => 3.14*radius**2;
console.log('the area1 is :', area1(5))

// callback function
const func = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}
func((value) => console.log(value));

//foreach
const people = ['sinan','deniz','can'];
people.forEach((person,index) => console.log(index,person))

//foreach with callback function
const logPerson = (person,index) => console.log(`${index} - ${person}`)
people.forEach(logPerson);

//callback in action
let html = ``;
people.forEach(person => {
    html+= `<li style="color:purple">${person}</li>`
})
<<<<<<< Updated upstream
ul.innerHTML = html;

// this usage (arrow funtionlarda this keywordu çalışmıyor sadece regular functionlarda çalışıyor)
let user = {
    name: "sinan",
    blogs: [
        {title:"merhaba", like: 30},
        {title:"javascript", like: 50}
    ],
    login: function(){
        console.log("the user logged in")
    },
    logout: function() {
        console.log("the user logged out")
    },
    logBlogs: function() {
        console.log("this user has written the following blogs: ")
        this.blogs.forEach(blog => console.log(blog.title, blog.like))
    }
}
user.login();
user.logout();
user.logBlogs();

// innerHTML and innerText
const content = document.querySelector('.content');
const employees = ['sinan','deniz','can'];
employees.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
// setAttribute
const msg = document.querySelector('.success')
msg.setAttribute('style','color:green')
console.log(msg.style)
msg.style.fontSize = '60px'
msg.style.color = 'crimson'

//Parents, Children & Siblings 
const article = document.querySelector('article')
Array.from(article.children).forEach(child => {
    child.classList.add('article-element')
})
// Event Listener

const items1 = document.querySelectorAll('li');

items1.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e.target)
    })
})
=======
ul.innerHTML = html; ;;;
>>>>>>> Stashed changes
