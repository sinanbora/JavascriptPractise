const correctAnswers = ['B','B','B','B']
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
let correct = document.querySelector('.form-check-label');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnswers.forEach((answer,index) =>{
        if (answer === correctAnswers[index]) {
            score += 100/((correctAnswers.length))
        }
    })

    scrollTo(0,0)
    
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if (output===score) {
            clearInterval(timer);
        } else {
            output++;
        }
    },10)
})

const products = [
    {user:'sinan',price:50},
    {user:'deniz',price:10},
    {user:'can',price:20},
    {user:'canan',price:30},
    {user:'ömer',price:70},
]

