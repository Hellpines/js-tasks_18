// 5. Создать выпадающий список для выбора валюты (например, USD, EUR, GBP). При выборе валюты
// и клике на кнопку "Показать курс" отправить запрос на API курса валют (например,
// https://api.exchangerate-api.com/v4/latest/USD). Отобразить курс выбранной валюты к рублю или
// доллару.

const open = document.querySelector('.open');
const list = document.querySelector('.list')
const divs = document.querySelectorAll('.list .info');
let flag = false;

open.addEventListener('click', () =>{
    if(flag == false) {
        list.style.display = 'block';
        flag = true
    }
    else {
        list.style.display = 'none'
        flag = false;
    }
})

divs.forEach(el => {
    el.addEventListener('click', async (event) =>{
        console.log(event.target)
        const pack = await fetch(`https://api.exchangerate-api.com/v4/latest/${event.target.className}`, {
            method: 'GET'
        })
        const arr = await pack.json();
        const p = document.createElement('p');
        document.querySelector(`div .${event.target.className}`).appendChild(p);
        p.textContent = `1 ${event.target.className} = ${arr.rates.USD} USD`
    })
    
});

