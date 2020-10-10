'use strict';
// your code goes in here

const quotesList = [
    {
        quote: '"Get busy living or get busy dying."',
        author: 'Stephen King ',
    },
    {
        quote: '"Great minds discuss ideas; average minds discuss events; small minds discuss people.”',
        author: 'Eleanor Roosevelt',
    },
    {
        quote: '"Those who dare to fail miserably can achieve greatly."',
        author: 'John F. Kennedy ',
    },
    {
        quote: '"It is hard to fail, but it is worse never to have tried to succeed."',
        author: 'Theodore Roosevelt ',
    },
    {
        quote: '"Let us always meet each other with smile, for the smile is the beginning of love."',
        author: 'Mother Teresa ',
    },
    {
        quote: '"Love is a serious mental disease."',
        author: 'Plato',
    },
    
];

const clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', findNewQuote);

function findNewQuote(){
    const quoteName = document.getElementById('quoteID');
    const authorName = document.getElementById('authorID');
    // for (let i = 0; i < quotesList.length; i++) {
        const randomQuotes = quotesList[Math.floor(Math.random()*quotesList.length)];
        quoteName.innerText=  randomQuotes.quote;
        authorName.innerText= ` - ${randomQuotes.author}`;       
    // }
}
findNewQuote();
