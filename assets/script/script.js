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
 
                const roundsLeft = document.querySelector('.rounds_left');
                rounds++;
                roundsLeft.innerText = `Rounds Left: ${10-moves}`;
                 
 
                const choiceNumbers = Math.floor(Math.random()*5) + 1;
                const computerChoices = computerChoice[choiceNumbers];
 
                // Check winner
                winner(this.innerText,computerChoices)
                 
                // GameOver after 10 moves
                if(rounds == 10){
                    gameOver(playerOptions,roundsLeft);
                }
            })
        })
         
    }
}