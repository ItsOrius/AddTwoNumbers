const ai = {

    anger: 0

}



// run this to restart the game
function runGameLoop() {

    ai.anger = 0;

    if (confirm("Hello! Welcome to AddTwoNumbers, a website with the sole purpose of adding two numbers and returning the result!\n\nWould you like to try it out?")) {

        // runs checks for the first input
        let num1 = prompt("Please enter your first number!");
        if (!parseFloat(num1)) {

            num1 = prompt("Sorry to break it to you, but I can only handle decimal numbers.\nPlease enter a **VALID** number this time!")
            if (!parseFloat(num1)) {
                alert("Alright, alright. That's enough. Goodbye.");
                return endGame("Math Illiterate")
            } else num1 = parseFloat(num1);

        } else num1 = parseFloat(num1);

        // runs checks for the second input
        let num2 = prompt("Please enter your second number!");
        if (!parseFloat(num2)) {

            num2 = prompt("Sorry to break it to you, but I can only handle decimal numbers.\nPlease enter a **VALID** number this time!")
            if (!parseFloat(num2)) {
                alert("Alright, alright. That's enough. Goodbye.");
                return endGame("Math Illiterate")
            } else num2 = parseFloat(num2);

        } else num2 = parseFloat(num2);

        // runs if no special endings happened
        alert(`The result is ${num1+num2}.\nThank you for visiting!`);
        return endGame("Good");

    } else {

        alert("Wow, that really hurt my feelings. :(");
        return endGame("Bad");

    }

}



// gets an anger 



// gives a game over screen
function endGame(ending = "") {

    const gameOverScreen = document.getElementById("game-over-div").innerHTML = `
        <p>
            Game over!
        </p>
            ${ending ? `<p>You got the <b>${ending}</b> ending.</p>` : ""}
        <p>
            Refresh to try again!
        </p>
    `;

}



// start the game for the first time
runGameLoop();