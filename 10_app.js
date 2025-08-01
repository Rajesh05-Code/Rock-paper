let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice"); //: We start with userScore and compScore both set to 0. These variables keep track of how many times the user and computer have won.
const msg = document.querySelector("#msg");    //We use document.querySelectorAll to grab all elements with the class .choice (the Rock, Paper, and Scissors options) and document.querySelector to grab the element where we display messages and scores.
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice =() => {
 const options = ["rock" , "paper" , "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
 //rock,paper,scissors
};

const drawGame = () => {
 //console.log("game was draw.");//
 msg.innerText ="Game was Draw. Play again.";
 
};

const showWinner = (userWin,userChoice,compChoice) => {
 if(userWin){
  userScore++;
  userScorePara.innerText =userScore;
  //console.log("you win!");//
  msg.innerText =`you win! your ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor ="green"
 }
 else {
  compScore++;
  compScorePara.innerText =compScore;
  //console.log("you lose");//
  msg.innerText =`you lose! ${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor ="red";
 };
};

const playGame = (userChoice) => {
console.log("userChoice" ,userChoice);
//generate computer choice ->modular way
const compChoice = genCompChoice();
console.log("compChoice" ,compChoice);

if(userChoice === compChoice) {
  drawGame();
  }else {
     let userWin =true;
     if(userChoice == "rock") {
      //scissors , paper
      userWin = compChoice ==="paper"? false: true;
     } else if(userChoice ==="paper") {
      //rock,scissors
      userWin = compChoice ==="scissors" ? false : true;
     } else {
      //rock,paper
       userWin =compChoice ==="rock" ? false:true;
     }
     showWinner(userWin ,userChoice,compChoice);
  };

};


choices.forEach((choice) => {

 choice.addEventListener("click" , () => {
  const userChoice =choice.getAttribute("id");

playGame(userChoice);
 });
});




