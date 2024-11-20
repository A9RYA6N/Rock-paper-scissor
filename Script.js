let buttons = document.querySelectorAll("button");
let userChoiceDisplay = document.getElementById("user-choice");
let computerChoiceDisplay = document.getElementById("computer-choice");
let winnerDisplay = document.getElementById("winner");
let score=document.getElementById("scores")
let choices=["rock","paper","scissors"];
let scores=0
function check(userChoice, computerChoice) 
{
    if(userChoice==computerChoice)
    {
        return "Draw!";
    }
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
       ){
        scores++;
        return "You win!";
    }
    scores--;
    return "Computer wins!";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        userChoiceDisplay.textContent = `You chose: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
        setTimeout(()=>{winnerDisplay.textContent = check(userChoice, computerChoice);},100);
        score.innerHTML=scores;
    });
});
