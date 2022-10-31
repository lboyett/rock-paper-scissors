function getComputerChoice() {
    let comNum = Math.floor(Math.random() * 100);
    if (comNum % 3 == 0) {
        let comRPS = 'Rock';
        return comRPS
    } else if (comNum % 2 == 0) {
        let comRPS = 'Paper';
        return comRPS
    } else {
        let comRPS = 'Scissors'
        return comRPS
    }
}

function playRound() {
    let counter = 0;
    for (i=0; i<=4; i++) {
        let userGuess = prompt('Guess');
        let compGuess = getComputerChoice();
        userGuess = userGuess.toLowerCase();
        compGuess = compGuess.toLowerCase();
        //console.log(userGuess);
       // console.log(compGuess);
        if (userGuess == compGuess) {
            counter = counter;
        } else if ((userGuess=='rock' && compGuess=='scissors') || 
                (userGuess=='paper' && compGuess=='rock') || 
                (userGuess=='scissors' && compGuess=='paper')) {
            counter = counter+1;
        } else {
            counter = counter-1;
        }
        console.log(compGuess);
    }
    if (counter>0) {
        console.log('YOU WON')
    } else if (counter == 0) {
        console.log('YOU TIED')
    } else {
        console.log('YOU LOST')
    }   
    return counter;
}

console.log(playRound())


