const getComputerChoice = function() {
    let comNum = Math.floor(Math.random() * 100);
    if (comNum % 3 == 0) {
        let comRPS = 'rock';
        return comRPS
    } else if (comNum % 2 == 0) {
        let comRPS = 'paper';
        return comRPS
    } else {
        let comRPS = 'scissors'
        return comRPS
    }
}


const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('.results');
console.log('RESULTS DIV: '+resultsDiv);
const results = document.createElement('p');
let counter = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const comRPS = getComputerChoice()
        if (counter == 3) {
            results.textContent = ('Score: ' +counter+ '--YOU WON!');
            return;
        } else if (counter == -3) {
            results.textContent = ('Score: ' +counter+ '--YOU LOST!');
            return;
        } 
        if (button.className=='rock' && comRPS=='scissors' ||
            button.className=='paper' && comRPS=='rock' ||
            button.className=='scissors' && comRPS=='paper') {
            ++counter;
            results.textContent = counter;
        } else if (button.className == comRPS) {
            results.textContent = counter;
        } else {
            results.textContent = counter;
            --counter;
        }
        console.log('BTN CLASS: ' +button.className);
        console.log('compChoice: '+ comRPS);
        resultsDiv.appendChild(results);
    });
}); 




/* function playRound() {
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
} */

//console.log(playRound())


