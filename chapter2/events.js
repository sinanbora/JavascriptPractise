
const items = document.querySelectorAll('li');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click',()=>{
    //ul.innerHTML += '<li>something new</li>'
    const li = document.createElement('li')
    li.textContent="something new";
    ul.append(li)
});

items.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.target.remove();
        
    })
})