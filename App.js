let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGame=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const disableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
}
const showWinner =(winner) =>{
    msg.innerHTML=`Congratulatulation winner is the player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const showDraw = () => {
    msg.innerHTML = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO) 
        {
            box.innerText="O";
            turnO=!turnO;
        }
        else{
            box.innerText="X";
            turnO=!turnO;

        }
        box.disabled= true;
        checkWinner();
    })
})


const checkWinner=()=>{
    let winnerFound=false;
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText)
        {

           showWinner(boxes[pattern[0]].innerText);
           winnerFound=true;
           break;

        }
    }
    if (!winnerFound) {
        const allBoxesFilled = Array.from(boxes).every(box => box.innerText !== "");
        if (allBoxesFilled) {
            showDraw();
        }
    }
}

const resetGame=()=>{
    if(turnO) turnO=true;
    else turnO=false;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
