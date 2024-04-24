let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#btn1");
let message = document.querySelector(".message");
let winn = document.querySelector("#msg");

let turnO = true ;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] ;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
   
    });
});

// const disableBoxes = () =>{
     // for(let i of boxes){
  //     box.disabled = true;
    // }
// }
const showWinner = (winner) => {
    winn.innerText = `Congratulations! Winner is ${winner}`;
    winn.classList.remove("hide");
//    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        if (box1 === box2 && box2 === box3 && box1 !== "") {
            showWinner(box1);
            for(let btn of boxes){
                btn.disabled = true;
            } 
        }
    }
}
const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true ;
    enable();
    winn.classList.add("hide");

}
reset.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);