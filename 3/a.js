// 3. Сделать две кнопки: "Факт о коте" и "Факт о собаке". При клике на любую из кнопок отправлять
// запрос на https://catfact.ninja/fact (для котов) или https://dog-api.kinduff.com/api/facts (для собак).
// Отобразить факт на странице.

const cat = document.querySelector('.cat');
const dog = document.querySelector('.dog');

cat.addEventListener('click', async () =>{
    document.querySelector('.info').innerHTML = ''
    const pack1 = await fetch('https://catfact.ninja/fact', {
        method: 'GET'
    })
    const info = await pack1.json();
    const fact = document.createElement('p');
    document.querySelector('.info').appendChild(fact);
    fact.textContent = info.fact;
})


dog.addEventListener('click', async () =>{
    document.querySelector('.info').innerHTML = ''
    const pack1 = await fetch('https://dog-api.kinduff.com/api/facts', {
        method: 'GET'
    })
    const info = await pack1.json();
    const facts = document.createElement('p');
    document.querySelector('.info').appendChild(facts);
    facts.textContent = info.facts
})

