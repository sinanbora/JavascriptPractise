
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
ul.innerHTML = html;