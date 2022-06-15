// Homework optional Rock, paper, scissors +5 puncte activitate

// Avem doi jucatori si fiecare face o alegere din cele trei variante ( Rock, paper, scissors ) 
// Trebuie sa avem alegerile si sa afisam cine castiga

// Pasi de implementare:

//     Un jucator va fi PC iar celalalt noi (User)
//     PC: Sa facem o lista cu variantele din care PC alege random
//     User: va avea 3 button cu optiunile si el alege una dintre ele
//     Trebui sa comparam alegerile si sa afisam rezultatul, adica cine castiga


const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];

//adaugam EventListener pentru butoane
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(event){
    //setam selectia player-ului
    let playerSelection = event.target.innerText;
    //setam selectia PC-ului cu un nr randomizat
    let computerSelection = Math.random();
    //daca PC-ul selecteaza mai putin de 34, se selecteaza de fapt rock
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    //setam functia care verifica castigatorul si returnam rezultatul
    let result = checkWinner(playerSelection, computerSelection);

    //afisam scorul in tabel
    if (result === 'Player'){
        result += ' wins!';
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!'
    }

    score.innerHTML = 'Player: [ ' + winnerScores[0]+ ' ] Computer: [ ' + winnerScores[1] + ' ]';

    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}