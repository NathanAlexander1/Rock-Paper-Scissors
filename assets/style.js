var wins = 0;
var losses = 0;
var ties = 0;
var options = ["r", "p", "s"];

function startGame () {
    var userChoice = prompt("Choose r, p, or s").toLowerCase();

    var randomInt = Math.floor(Math.random()*options.length);
    var computerChoice = options[randomInt];
    compare(userChoice, computerChoice);
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
        alert("It is a tie!");
    } else if ((userChoice === "r" && computerChoice === "s") || (userChoice === "p" && computerChoice === "r") || (userChoice === "s" && computerChoice === "p")) {
        wins++;
        alert("You are a winner");
    } else {
        losses++
        alert("You lose!");
    }
    alert(`Stats:
    Wins: ${wins}
    Ties: ${ties}
    Losses: ${losses}`)

    var play = confirm("Play again?")
    if (play) {
        startGame()
    }
}

startGame();





// //TODO: collect user choice
//     //TODO: prompt user for R, P, or S.
//     //TODO: save user choice to a variable
// var userChoice = prompt("rock, paper or scissors?");
// console.log(userChoice);


// //TODO: EDGE CASE: adjust for casing
//     //TODO: EDGE CASE: handle non-standard letters
//     //TODO: EDGE CASE: handle empty sumbission

// //TODO: generate computer choice
// var computerChoice = Math.random();
//     //TODO: store possible choices (r,p,s);
//     //TODO: randomly select item from possible choices
//     //TODO: store in a variable
//     if (computerChoice <= (1/3)) {
//         computerChoice = "paper";
//     } else if (computerChoice > (1/3) && computerChoice < (2/3)) {
//         computerChoice = "rock";
//     } else {
//         computerChoice = "scissors"
//     }




// function letsPlay (computerChoice, userChoice) {
//     var lose = alert(`LOSE! Computer chose ` + computerChoice + ` Try again!`);
//     var win = alert(`Well played this round. Computer chose ` + computerChoice);
//     var tie = alert(`hmmm...it seems we are evenly matched... We both chose ` + computerChoice + `. Let us play again`);
   
//     if (computerChoice === "paper" && userChoice === "rock") {
//         lose;
//     } else if (computerChoice === "paper" && userChoice === "paper") {
//         tie;
//     } else if (computerChoice === "paper" && userChoice === "scissors") {
//         win;
//     } else if (computerChoice === "rock" && userChoice === "scissors") {
//          lose;
//     } else if (computerChoice === "rock" && userChoice === "rock") {
//          tie;
//     } else if (computerChoice === "rock" && userChoice === "paper") {
//          win;
//     } else if (computerChoice === "scissors" && userChoice === "paper") {
//          lose;
//     } else if (computerChoice === "scissors" && userChoice === "scissors") {
//          tie;
//     } else {
//          win;
//     }
// }

// function letsPlay (computerChoice, userChoice) {
//     if (computerChoice === "paper" && userChoice === "rock") {
//         lose;
//     } else if (computerChoice === "paper" && userChoice === "paper") {
//         tie;
//     } else {
//         win;
//     }

//     if (computerChoice === "rock" && userChoice === "scissors") {
//         lose;
//     } else if (computerChoice === "rock" && userChoice === "rock") {
//         tie;
//     } else {
//         win;
//     }

//     if (computerChoice === "scissors" && userChoice === "paper") {
//         lose;
//     } else if (computerChoice === "scissors" && userChoice === "scissors") {
//         tie;
//     } else {
//         win;
//     }
// }

// letsPlay (computerChoice, userChoice);


//TODO: compare choices
//TODO: display stats
//TODO: ask to play again