
let computerSelection = computerPlay()
const playerSelection = "rock";

for(let i = 0; i < 5 ; i++){
    computerSelection = computerPlay();
    console.log(`${playerSelection} vs ${computerSelection.toLowerCase()}`)
    console.log(playRound(playerSelection, computerSelection));
}


function computerPlay(){
    const results = ["Rock", "Paper", "Scisscor"];
    var  result = Math.floor((Math.random() * 3) - .01);
    return results[result];
}


function playRound(playerSelection="", computerSelection=""){

    if(!(playerSelection == "") && !(computerSelection =="")){

        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerSelection.toLowerCase()
        switch(playerSelection){
            case "rock":{
                if(computerSelection === playerSelection){
                    return "It's a draw!"
                }else if(computerSelection === "paper"){
                    return "It's a lose!"
                }else if(computerSelection === "scisscor"){
                    return "It's a win!"
                }else{
                    return "Invalid round!"
                }
            }
            case "paper":{
                if(computerSelection === playerSelection){
                    return "It's a draw!"
                }else if(computerSelection === "scisscor"){
                    return "It's a lose!"
                }else if(computerSelection === "rock"){
                    return "It's a win!"
                }else{
                    return "Invalid round!"
                }
            }
            case "scisscor":{
                if(computerSelection === playerSelection){
                    return "It's a draw!"
                }else if(computerSelection === "rock"){
                    return "It's a lose!"
                }else if(computerSelection === "scisscor"){
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