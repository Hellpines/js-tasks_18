// 2. Сделать кнопку "Показать случайную цитату". При клике на кнопку отправлять запрос на
// https://api.quotable.io/random. Отобразить на странице текст цитаты и имя автора.

const btn = document.querySelector('button')

btn.addEventListener('click', async () =>{
    const package = await fetch('https://api.quotable.io/random', {
        method: 'GET'
    })
    const arr = await package.json();
    const cit = document.createElement('p');
    const name = document.createElement('h2');
    document.querySelector('.info').appendChild(cit);
    document.querySelector('.info').appendChild(name);
    cit.textContent = arr.content;
    name.textContent = arr.author
})