const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
    const lizardBtn = document.querySelector('lizard');
    const spockBtn = document.querySelector('spock');
		const playerOptions = [rockBtn,paperBtn,scissorBtn,lizardBtn,spockBtn];
		const computerOptions = ['rock','paper','scissors','lizard','spock']
		
