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
         
    } 


  // Function to decide who wins
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
        console.log(computer);
        if(computer == 'paper'){
            result.textContent = 'Computer choose Paper, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }if(computer == 'scissors'){
            result.textContent = 'Computer choose Scissors, Point to you';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'rock'){
            result.textContent = 'You both choose Rock, Tie';
        }if(computer == 'lizard'){
                result.textContent = 'Computer choose Lizard, Point to you';
                userScore++;
                userScoreBoard.textContent = userScore;
        }if(computer == 'spock'){
                result.textContent = 'Computer choose Spock, Point to Computer';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        
    if(user == 'scissors'){
        console.log(computer);
        if(computer == 'paper'){
            result.textContent = 'Computer choose Paper, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
            console.log(computer)
        }if(computer == 'scissors'){
            result.textContent = 'You both choose Scissors, Tie';
        }if(computer == 'rock'){
            result.textContent = 'Computer choose Rock, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }if(computer == 'lizard'){
            result.textContent = 'Computer choose Lizard, Point to you';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'spock'){
            result.textContent = 'Computer choose Spock, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
          }
        }
    if(user == 'paper'){
        console.log(computer);
        if(computer == 'rock'){
            result.textContent = 'Computer choose Rock, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'scissors'){
            result.textContent = 'Computer choose Scissors, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }if(computer == 'paper'){
            result.textContent = 'You both choose Paper, Tie';
        }if(computer == 'spock'){
            result.textContent = 'Computer choose Spock, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'lizard'){
            result.textContent = 'Computer choose Lizard, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    }
    if(user == 'lizard'){
        console.log(computer);
        if(computer == 'rock'){
            result.textContent = 'Computer choose Rock, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }if(computer == 'scissors'){
            result.textContent = 'Computer choose Scissors, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore; 
        }if(computer == 'paper'){
            result.textContent = 'Computer choose Paper, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'spock'){
            result.textContent = 'Computer choose Spock, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
        }if(computer == 'lizard'){
            result.textContent = 'You both choose Lizard, Tie';
        }
    }
    if(user == 'spock'){
        console.log(computer);
        if(computer == 'rock'){
            result.textContent = 'Computer choose Rock, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
        }
        if(computer == 'scissors'){
            result.textContent = 'Computer choose Scissors, Point to You';
            userScore++;
            userScoreBoard.textContent = userScore;
        }
        if(computer == 'paper'){
            result.textContent = 'Computer choose Paper, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore; 
        }
        if(computer == 'lizard'){
            result.textContent = 'Computer choose Lizard, Point to Computer';
            computerScore++;
            computerScoreBoard.textContent = computerScore; 
        }
        if(computer == 'spock'){
            result.textContent = 'You both choose Spock, Tie';
        }
    }
} 


 // endgame function
 const gameOver = (userChoice,roundsLeft) => {
 
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('#result');
    const reloadBtn = document.querySelector('.reload');

    userChoice.forEach(choice => {
        choice.style.display = 'none';
    })

  
    chooseMove.innerText = 'Game Over!'
    roundsLeft.style.display = 'none';

    if(userScore > computerScore){
        result.style.fontSize = '40px';
        result.innerText = 'You Won The Game'
        result.style.color = 'limegreen';
    }
    else if(userScore < computerScore){
        result.style.fontSize = '40px';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else{
        result.style.fontSize = '40px';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'center';
    reloadBtn.style.fontSize = '40px';
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })
}
    

  
playGame(); 

}


game();


