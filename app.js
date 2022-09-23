const game = () =>{

    let pScore=0;
    let cScore=0;
    
    const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const intro = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () =>{
     intro.classList.add("fadeOut");
     match.classList.add("fadeIn");
    });

    const playMatch = () => {

        const options = document.querySelectorAll(".options button");  
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");      
        computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {

            option.addEventListener("click", function(){
               
                
                computerRandomNum = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerRandomNum]
                compareHands(this.textContent, computerChoice);
                playerHand.src=`./images/${this.textContent}.png`
                computerHand.src=`./images/${computerChoice}.png`
   
            })
        })   
    }

    const updateScore = () => {

        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice)
        {
        winner.textContent = "It's a tie";
        return;
        }

        if(playerChoice === "rock")
        {
            if(computerChoice === "paper"){
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;

            }
        }

        if(playerChoice === "paper")
        {
            if(computerChoice === "rock"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;

            }
            else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;

            }
        }

        if(playerChoice === "scissors")
        {
            if(computerChoice === "rock"){
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;

            }
            else{
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;

            }
        }

    }
    updateScore();
    playMatch();
};
startGame();

};

game();