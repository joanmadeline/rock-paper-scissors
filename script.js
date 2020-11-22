const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const option = document.getElementById('option');
const display = document.getElementById('display');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const results = document.getElementById('results');
const replay = document.getElementById('replay');
const playAgainBtn = document.getElementById('playAgain');
const score = document.getElementById('score');
let counter = 0;
const rulesBtn = document.getElementById('rulesBtn');
const rules = document.getElementById('rules');
const closeBtn = document.getElementById('closeBtn');

const rock = "<img src=\"images/icon-rock.svg\" alt=\"rock\" class=\"element\" id=\"rock\">";
const paper = "<img src=\"images/icon-paper.svg\" alt=\"paper\" class=\"element\" id=\"paper\">";
const scissor = "<img src=\"images/icon-scissors.svg\" alt=\"scissor\" class=\"element\" id=\"scissor\">";

const playRock = () => {
    option.style.display = "none";
    display.style.display = "flex";
    player.innerHTML = rock;
    setTimeout(computerPlay, 1000);
    setTimeout(showResults, 1250);
}

const playPaper = () => {
    option.style.display = "none";
    display.style.display = "flex";
    player.innerHTML = paper;
    setTimeout(computerPlay, 1000);
    setTimeout(showResults, 1250);
}

const playScissor = () => {
    option.style.display = "none";
    display.style.display = "flex";
    player.innerHTML = scissor;
    setTimeout(computerPlay, 1000);
    setTimeout(showResults, 1250);
}

const computerPlay = () => {
    computer.style.visibility = "visible";
    const random = Math.floor((Math.random() * 3) + 1);
    switch (random) {
        case 1: computer.innerHTML = rock;
        break;
        case 2: computer.innerHTML = paper;
        break;
        case 3: computer.innerHTML = scissor;
        break;
    }
}

const showResults = () => {
    if ((player.innerHTML === rock && computer.innerHTML === rock) || 
    (player.innerHTML === paper && computer.innerHTML === paper) ||
    (player.innerHTML === scissor && computer.innerHTML === scissor)) {
        results.innerHTML = 'TIE';
    }
    else if ((player.innerHTML === rock && computer.innerHTML === scissor) || 
    (player.innerHTML === paper && computer.innerHTML === rock) ||
    (player.innerHTML === scissor && computer.innerHTML === paper)) {
        results.innerHTML = "YOU WIN";
        counter++;
        score.innerHTML = counter;
    }
    else {
        results.innerHTML = "YOU LOSE";
        counter--;
        score.innerHTML = counter;
    }
    replay.style.visibility = 'visible';
}

const playAgain = () => {
    option.style.display = "flex";
    display.style.display = "none";
    computer.style.visibility = "hidden";
    replay.style.visibility = "hidden";
}

const showRules = () => {
    rules.style.display = "block";
}

const closeRules = () => {
    rules.style.display = "none";
}

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorBtn.addEventListener('click', playScissor);
playAgainBtn.addEventListener('click', playAgain);
rulesBtn.addEventListener('click', showRules);
closeBtn.addEventListener('click', closeRules);