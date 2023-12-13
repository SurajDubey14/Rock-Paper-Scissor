let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const winscore = document.querySelector("#user-score");
const losescore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    winscore.innerText = 0;
    losescore.innerText = 0;
    msg.innerText= "Game was draw. Play again" ;
    msg.style.backgroundColor = "#081b31";
    userscore=0;
    compscore=0;
}

const showWinner = (userwin , userchoice , compchoice) => {
    if(userwin) {
        userscore++;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice} .`;
        msg.style.backgroundColor = "green";
        winscore.innerText = userscore;
    }else {
        compscore++;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice} .`;
        msg.style.backgroundColor = "blue";
        losescore.innerText = compscore;
    }
}

const playgame = (userchoice) => {
    console.log("userchoice = ", userchoice);
    const compchoice = genCompChoice();
    console.log("compchoice = ", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            // paper scissor
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper"){
            // scissor
            userwin = compchoice === "scissor" ? false : true;
        } else {

            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin , userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})