function playGame(playerInput){
    clearMessages();
    function getMoveName(computerMove, playerMove){
        if(computerMove == 1){
        return 'kamień';
        } else if(computerMove == 2){
            return 'papier';
        }    else if(computerMove == 3){
                return 'nożyce';
        } else {
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);


    printMessage('Ruch komputera to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    // WYNIKI


    let argComputerMove, argPlayerMove = displayResult(computerMove, playerMove);
    console.log('player move: ', playerMove);

    function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    
        if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Ty przegrywasz!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            printMessage('Ty przegrywasz! - nieznany ruch');
        }
        if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Przegrywasz!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Wygrywasz!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
            printMessage('Ty przegrywasz! - nieznany ruch');
        }
        if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Wygrywasz!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ty przegrywasz!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
            printMessage('Ty przegrywasz! - nieznany ruch');
        }
    }

    console.log('W1ynik gry: ' + displayResult);

}

document.getElementById('play-rock').addEventListener('click', function (){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function (){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function (){
    playGame(3);
  });