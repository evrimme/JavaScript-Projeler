const guess_input=document.getElementById("your_guess_input");
const button=document.getElementById("guess_button");
const directionText=document.getElementsByClassName("direction_text")[0];
const guessed_number=document.getElementsByClassName("currently_guessed")[0];

let last_guess;
let guess_count=0;

let random_number;
random_number=randomInt(1,100);
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min))+min;
}
button.addEventListener("click",function(){
let entered_number=parseInt(guess_input.value);

if(isNaN(entered_number))
{
    directionText.textContent="Please enter a valid value.";
    return;
}
    if(entered_number=== random_number)
{
   directionText.textContent="Congratulations your guess is right!";
}
else if(entered_number<random_number)
{
    directionText.textContent="Please enter a high guess.";
}
else if(entered_number>random_number)
{
    directionText.textContent="Please enter a low guess.";
}
});
   button.addEventListener("click",function(){
       last_guess=parseInt(guess_input.value);
       guessed_number.textContent="Your last guess is "+last_guess;
       return;
   });
