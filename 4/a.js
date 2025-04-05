// 4. Сделать кнопку "Новая загадка". При клике отправить запрос на https://official-joke-api.appspot.com/random_joke. Отобразить на странице текст: часть "setup" и "punchline".

const btn = document.querySelector('button')

btn.addEventListener('click', async () =>{
    document.querySelector('.info').innerHTML = ''
    const pack = await fetch('https://official-joke-api.appspot.com/random_joke', {
        method: 'GET'
    })
    const info = await pack.json();
    const setup = document.createElement('p');
    const punchline = document.createElement('h2');
    document.querySelector('.info').appendChild(setup);
    document.querySelector('.info').appendChild(punchline);
    setup.textContent = info.setup;
    punchline.textContent = info.punchline;
})

