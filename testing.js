const prompt = require('prompt-sync')({ sigint: true });

const startGame = () => {
  let playAgain = 'y'; // Initialize variable to start the first game

  while (playAgain === 'y' || playAgain === 'yes') {
    // Random number from 1 - 100
    let numberInMind = Math.floor(Math.random() * 100) + 1;

    // This variable is used to determine if the app should continue prompting the user for input
    let foundCorrectNumber = false;

    let attempts = 0;

    while (!foundCorrectNumber) {
      // Step 1: Get user input (don't forget that the input is a string)
      let guess = prompt("Guess a number between 1 - 100! : ");
      guess = Number(guess); // convert String input to Number

      // Step 2: Compare the guess to the secret answer
      // let the user know the feedback (too large, too small, correct).

      if (isNaN(guess)) {
        console.log("Please enter a valid number.");
      } else if (guess < 1 || guess > 100) {
        console.log("Please enter a valid number between 1 and 100.");
      } else {
        attempts++;
        if (guess < numberInMind) {
          console.log("Too low! Try again!");
        } else if (guess > numberInMind) {
          console.log("Too high! Try again!");
        } else {
          console.log(`CORRECT! The answer was ${numberInMind}. It took you ${attempts} attempt(s).`);
          foundCorrectNumber = true;
        }
      }
    }

    // Bonus Point: prompt user and provide option for user to start a new game after winning
    playAgain = prompt("Do you want to play again? (type 'y' for yes, 'n' for no): ").toLowerCase();

    if (playAgain !== 'y' && playAgain !== 'yes') {
      console.log("Thanks for playing! Goodbye!");
    }
  }
};

// Start the game
startGame();