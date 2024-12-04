const button = document.getElementById("next_button");
const quoteDisplay = document.getElementById("quoteDisplay"); 

let quote1 = "Risk is better than regret.";
let quote2 = "You are the greatest project you will ever work on.";
let quote3 = "Taking care of yourself is productive.";
let quote4 = "Upgrade your life in silence.";
let quote5 = "The day you plant the seed is not the day you eat the fruit.";
let quote6 = "Do something today that your future self will thank for.";
let quote7 = "Don't be the same.Be better.";
let quote8 = "Take it day by day,don't stress too much about tomorrow.";
let quote9 = "You get what you work for not what you wish for.";
let quote10 = "Be the reason someone feels welcomed,seen,heard,valued,loved and supported.";


let quote_array = [quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10];

let currentIndex = 0; 

button.addEventListener("click", quotes);

function quotes() {
    quoteDisplay.textContent = quote_array[currentIndex]; 
    currentIndex = (currentIndex + 1) % quote_array.length; 
}

