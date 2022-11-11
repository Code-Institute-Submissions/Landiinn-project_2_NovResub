const game = () => {
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;
 
 
    
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const lizardBtn = document.querySelector('.lizard');
        const spockBtn = document.querySelector('.spock');
       
        const userChoice = [rockBtn,paperBtn,scissorBtn,lizardBtn,spockBtn];
        const computerChoice = ['rock','paper','scissors','lizard','spock'];
         
        // StartGame Function
        userChoice.forEach(choice => {
            choice.addEventListener('click',function(){
 
                const roundsLeft = document.querySelector('#rounds_left');
                rounds++;
                roundsLeft.innerText = `Rounds Left: ${10-rounds}`;
                 
 
                const choiceNumbers = Math.floor(Math.random() * 5);
                const computerChoices = computerChoice[choiceNumbers];
 
                // Check winner
                winner(this.innerText, computerChoices)
                 
                // GameOver after 10 moves
                if(rounds === 10){
                   gameOver(userChoice, roundsLeft);
                }
            })
        })
         
    


  // Function to decide winner
  const winner = (user,computer) => {
    const result = document.querySelector('#result');
    const userScoreBoard = document.querySelector('#user_score');
    const computerScoreBoard = document.querySelector('#comp_score');
   
    user = user.toLowerCase();
    computer = computer.toLowerCase();

    if(user === computer){
        result.textContent = 'Tie'
    }
    else if(user == 'rock'){
        if(computer == 'paper'||'spock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            console.log(computer)

        }else{
            result.textContent = 'You Won'
            userScore++;
            userScoreBoard.textContent = userScore;
        }
    }
    else if(user == 'scissors'){
        if(computer == 'rock'||'spock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
        }
    }
    else if(user == 'paper'){
        if(computer == 'scissors'||'lizard'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
        }
    }
    else if(user == 'lizard'){
        if(computer == 'sciccors'||'rock'){
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
        }
    }
    else if(user == 'spock'){
        if(computer == 'paper'||'lizard'){
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
        }
  }
}


 // Function to run when game is over
 const gameOver = (userChoice,roundsLeft) => {
 
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('#result');
    const reloadBtn = document.querySelector('.reload');

    userChoice.forEach(choice => {
        choice.style.display = 'none';
    })

  
    chooseMove.innerText = 'Game Over!!'
    roundsLeft.style.display = 'none';

    if(userScore > computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else if(userScore < computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else{
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })
}
    

  }
playGame(); 

}


game();