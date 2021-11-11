
    function startguess() {
        let bool = confirm("Want to guess a number?");

        if (bool == true) {
            play1game();
        } else {
            alert("thanks for playing the game");
            exit;

        }
    }


function guess_number() {
    g = prompt("What number would you like to guess?");
    return g;
}



function play1game() {
    // statements to play one game go here	
    var guess, secret;


    secret = Math.floor(100 * Math.random()) + 1; // random number between 1 and 100;



    do {
        let guess = guess_number();
        if (guess > secret) {
            alert(guess + "too high");
        }

        if (guess < secret) {
            alert(guess + "too low");
        }

        if (guess == secret) {
            alert("You are correct!")
            break;
        }

    }
    while (guess !== secret);

    startguess();
}


startguess();