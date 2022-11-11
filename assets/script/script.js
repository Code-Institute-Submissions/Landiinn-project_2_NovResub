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
    if(user == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            console.log(computer)
        }if(computer == 'scissors'){
            result.textContent = 'You Won'
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'rock'){
            result.textContent = 'Tie';
        }if(computer == 'lizard'){
                result.textContent = 'You Won'
                userScore++;
                userScoreBoard.textContent = userScore;
        }if(computer == 'spock'){
                result.textContent = 'Computer Won'
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        
    if(user == 'scissors'){
        if(computer == 'paper'){
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
            console.log(computer)
        }if(computer == 'scissors'){
            result.textContent = 'Tie';
        }if(computer == 'rock'){
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }if(computer == 'lizard'){
            result.textContent = 'You Won'
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'spock'){
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }

    if(user == 'paper'){
        if(computer == 'rock'){
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'scissors'){
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }if(computer == 'paper'){
            result.textContent = 'Tie';
        }if(computer == 'spock'){
            result.textContent = 'You Won';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'lizard'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    if(user == 'lizard'){
        
    }
        }
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