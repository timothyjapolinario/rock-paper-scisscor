




let userScore = 0;
let computerScore = 0;
let lol = "paper"
let matchStatus = document.querySelector("#match");
let currentScore = document.querySelector("#current-score");
let surpriseText = document.querySelector("#surprise-text");
let resetButton = document.querySelector("#reset");
console.log(matchStatus);
console.log(currentScore);
const options = document.querySelectorAll(".option");


resetButton.addEventListener('click', function(e){
    reset();
});



options.forEach(option=>{
    option.addEventListener('click', function(e){
        playRound(playerSelection = option.id);
        updateStatus()
    })
})

function updateStatus(){
    currentScore.innerText = `computer score= ${computerScore} vs player score= ${userScore}`;
    announceWinner();
}
function reset(){
    computerScore = 0
    userScore = 0;
    updateStatus();
}

function computerPlay(){
    const results = ["rock", "paper", "scissor"];
    var  result = Math.floor((Math.random() * 3) - .01);
    return results[result];
}

function announceWinner(){
    if(computerScore === 5){
        surpriseText.innerText = "Bobo Yacat";
    }else if(userScore === 5){
        surpriseText.innerHTML = "Bobo Jasper"
    }
}

function playRound(playerSelection, computerSelection=computerPlay()){
    if(computerScore !== 5 && userScore !==5){
        const results = ["rock", "paper", "scissor"];
        if((results.includes(playerSelection)) && !(computerSelection =="")){
            matchStatus.innerText = `${playerSelection} vs ${computerSelection}`;
            playerSelection = playerSelection.toLowerCase()
            computerSelection = computerSelection.toLowerCase()
            switch(playerSelection){
                case "rock":{
                    if(computerSelection === playerSelection){
                        return "It's a draw!"
                    }else if(computerSelection === "paper"){
                        computerScore += 1;
                        return "It's a lose!"
                    }else if(computerSelection === "scissor"){
                        userScore += 1;
                        return "It's a win!"
                    }else{
                        return "Invalid round!"
                    }
                }
                case "paper":{
                    if(computerSelection === playerSelection){
                        return "It's a draw!"
                    }else if(computerSelection === "scissor"){
                        computerScore += 1;
                        return "It's a lose!"
                    }else if(computerSelection === "rock"){
                        userScore += 1;
                        return "It's a win!"
                    }else{
                        return "Invalid round!"
                    }
                }
                case "scissor":{
                    if(computerSelection === playerSelection){
                        return "It's a draw!"
                    }else if(computerSelection === "rock"){
                        computerScore += 1;
                        return "It's a lose!"
                    }else if(computerSelection === "scissor"){
                        userScore += 1;
                        return "It's a win!"
                    }else{
                        return "Invalid round!"
                    }
                }
            }
        }else{
            return "Invalid Round!"
        }
    }
}

