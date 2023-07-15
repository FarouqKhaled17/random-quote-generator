let btn=document.getElementById('btn');
let op=document.getElementById('quote');
let quotes=[
    '“Be yourself; everyone else is already taken.”― Oscar Wilde',
    '“A room without books is like a body without a soul.”― Marcus Tullius Cicero',
    '“Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind.”― Bernard M. Baruch',
    '“You only live once, but if you do it right, once is enough.”― Mae West',
'“Be the change that you wish to see in the world.”― Mahatma Gandhi',
'“In three words I can sum up everything Ive learned about life: it goes on.”― Robert Frost',
];
btn.addEventListener('click',function(){
    var randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
    quote.innerHTML=randomQuote
})