const result = document.getElementById("result");
let [comp_score, user_score] = [0,0];

     let gameRules = {
    Rock: {
        Rock: 'draw',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'draw',
        Spock: 'lose'
    },
    Spock: {
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
        Lizard: 'win',
        Spock: 'draw'
    }
}
    
    function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.trunc(Math.random() * 5); 
    let comp_choice = choices[randomNumber];

    


    console.log(randomNumber);
    document.getElementById("userChoice").innerHTML = `Computer choose <span>${comp_choice.toUpperCase()}</span>`;
    document.getElementById("compChoice").innerHTML = `You choose <span>${input.toUpperCase()}</span>`;
 
    console.log('input', input, 'comp-choice', comp_choice);
    switch(gameRules[comp_choice][input]) {
        case 'win':
            result.innerText = `You win`;
            result.style.cssText = "background-color: rgb(128, 247, 128)";
            user_score++;
            break;
        case 'lose':
            result.innerText = `You lose`;
            result.style.cssText = "background-color: rgb(240, 124, 124)";
            comp_score++;
            break;
        case 'draw':
            result.innerText = `You draw`;
            result.style.cssText = "background-color: rgb(102, 102, 102)";
            break;  
    }
   
    localStorage.setItem('userInputValue', JSON.stringify(user_score));
    localStorage.setItem('compInputValue', JSON.stringify(comp_score));
   
    setLocalStorageData();
 
     
    if(user_score === 10) {
        document.querySelector(".reload").innerHTML = `Good Job`;
        choices.style = 'none';
       
       
    }
    else if(comp_score === 10) {
      
       document.querySelector(".reload").innerHTML = `Try Again`;
       choices.style = 'none';
    }  
    
    }

const setLocalStorageData = () => {
    document.getElementById('comp_score').innerHTML = localStorage.getItem('compInputValue');
    document.getElementById('user_score').innerHTML = localStorage.getItem('userInputValue'); 
  } 
  setLocalStorageData();
    