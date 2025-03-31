const playerScoreEl = document.getElementById('player-score');
        const computerScoreEl = document.getElementById('computer-score');
        const playerChoiceEl = document.getElementById('player-choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const resultEl = document.getElementById('result');
        const resetBtn = document.getElementById('reset');
        const choices = ['rock', 'paper', 'scissors'];
        const choiceSymbols = {
            rock: '✊',
            paper: '✋',
            scissors: '✌️'
        };
        let playerScore = 0;
        let computerScore = 0;
        document.getElementById('rock').addEventListener('click', () => playGame('rock'));
        document.getElementById('paper').addEventListener('click', () => playGame('paper'));
        document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
        resetBtn.addEventListener('click', resetGame);
        function playGame(playerChoice) {
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            playerChoiceEl.textContent = choiceSymbols[playerChoice];
            computerChoiceEl.textContent = choiceSymbols[computerChoice];
            let result;
            if (playerChoice === computerChoice) {
                result = "It's a tie!";
                resultEl.style.color = "#FFC107";
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = "You win!";
                playerScore++;
                playerScoreEl.textContent = playerScore;
                resultEl.style.color = "#4CAF50";
            } else {
                result = "Computer wins!";
                computerScore++;
                computerScoreEl.textContent = computerScore;
                resultEl.style.color = "#f44336";
            }
            
            resultEl.textContent = result;
        }
        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
            playerChoiceEl.textContent = '?';
            computerChoiceEl.textContent = '?';
            resultEl.textContent = 'Choose your move!';
            resultEl.style.color = "#4CAF50";
        }