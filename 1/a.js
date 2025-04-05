// 1. Создать кнопку "Загрузить пользователей". При клике на кнопку — отправить запрос на
// https://jsonplaceholder.typicode.com/users. Отобразить полученные данные в виде карточек, каждая
// из которых будет содержать: имя (name), email (email), город (address.city).

const btn = document.querySelector('button');

btn.addEventListener('click', async () =>{
    const package = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
    const arr = await package.json();
    for(let el of arr){
        const div = document.createElement('div')
        document.querySelector('.main').appendChild(div)
        const name = document.createElement('h1')
        const email = document.createElement('h2')
        const address = document.createElement('h3')
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(address);
        name.textContent = el.name;
        email.textContent = el.email;
        address.textContent = el.address.city;
    }
})

