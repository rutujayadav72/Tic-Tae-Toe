let play1Score = 0;
let play2Score = 0;

let turnO = true;

let winPatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
]

console.log(winPatterns);
let buttons = document.querySelectorAll("button");
let msg = document.querySelector(".msg");
let play1ScorePara = document.querySelector("#play1score");
let play2ScorePara = document.querySelector("#play2score");
let reset = document.querySelector(".reset");
let resetBtn =document.querySelector("#reset-btn");
let newBtnGame = document.querySelector("#new-btn");
let finalWinner = document.querySelector(".winner");
let last = document.querySelector(".last");

const resetGame = () =>{
  turnO =true;
  enabledBoxes();
   reset.classList.add("hide");
   last.classList.add("hidden");
}

const FinalWinner = () =>{
  if(play1Score === 3){
     finalWinner.innerText ='Congratulation Finalwinner is O';
  }else if(play2Score === 3) {
    finalWinner.innerText = "Congratulation Finalwinner is X";
  }

   last.classList.remove("hidden");
   reset.classList.add("hide");
}


buttons.forEach((button) => {
    button.addEventListener('click', () =>{
       if(turnO){
         button.innerText = "X";
         turnO = false;
       
       }else{
         button.innerText ="O";
         turnO = true;
       }
       button.disabled = true;
       checkWinner();
      
       });
});

const disabledBoxes = () =>{
  for( let button of buttons){
    button.disabled = true;
  }
}
const enabledBoxes = () =>{
  for(let button of buttons){
    button.disabled = false;
    button.innerText = "";
    
  }
}
const score = (turnO) =>{
  if(turnO){
    play1Score++;
    play1ScorePara.innerText = play1Score;
  }else{
    play2Score++;
    play2ScorePara.innerText = play2Score;
  }
}
const showWinner = (winner) =>{
  msg.innerHTML =`<i>Congratulations winner is ${winner}🤩🎉<i> `;
  reset.classList.remove("hide");
  disabledBoxes();
  
};

const checkWinner = () =>{
 for( let pattern of winPatterns){
    let pos1val = buttons[pattern[0]].innerText;
    let pos2val = buttons[pattern[1]].innerText;
    let pos3val = buttons[pattern[2]].innerText;

    if(pos1val !== '' && pos2val !== '' && pos3val !==''){
         if( pos1val === pos2val && pos2val === pos3val){
      console.log("winner" ,pos1val);
      
      showWinner(pos1val);
      score(turnO);
      
      
      }
    }
};
}

newBtnGame.addEventListener('click',resetGame) ;
resetBtn.addEventListener('click',resetGame) ;