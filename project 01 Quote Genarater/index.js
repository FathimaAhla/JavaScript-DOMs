//project : quote Generator/ Beginner

//Key Concepts for Project

// 1- document.querySelector()
// 2- addEventListener()
// 3- Math Object()
// 4- innerText 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"You were born to stand out, stop trying to fit in."',
    person: 'Favorite Quote 02'
}, {
    quote: '"There will never be another precious you! Be yourself. Stay true to your inner nature."',
    person: 'Favorite Quote 03'
}, {
    quote: '"Don\'t wait for things to happen. Make them happen."',
    person: 'Favorite Quote 04'
}, {
    quote: '"Life gives us choices. You either grab on with both hands and just go for it, or you sit on the sidelines."',
    person: 'Favorite Quote 05'
}, {
    quote: '"Nothing is permanent. Don\'t stress yourself too much because no matter how bad the situation is, it will change."',
    person: 'Favorite Quote 06'
}, {
    quote: '"If you expect the world to be fair with you because you are fair, you\'re fooling yourself. That\'s like expecting the lion not to eat you because you didn\'t eat him."',
    person: 'Favorite Quote 07'
}, {
    quote: '"Be grateful for what you already have while you pursue your goals."',
    person: 'Favorite Quote 08'
}, {
    quote: '"Sometimes we waste too much time to think about someone who doesn\'t think about us for one second."',
    person: 'Favorite Quote 09'
}, {
    quote: '"Life is not measured by the number of breaths we take, but by the moments that take our breath away."',
    person: 'Favorite Quote 10'
}, ];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})