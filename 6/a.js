// 6. Создать кнопку "Показать случайное изображение". При каждом клике отправлять запрос на
// https://picsum.photos/300. Вставить полученное изображение в DOM (вставить <img> с полученным
// URL).

const btn = document.querySelector('button');
const img = document.querySelector('img')
btn.addEventListener('click', async () => {
    const pack = await fetch('https://dog.ceo/api/breeds/image/random',{
        method:'GET'
    })
    const info = await pack.json();
    img.src = info.message
})

