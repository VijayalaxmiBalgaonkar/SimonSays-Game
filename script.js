let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let maxScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if(started == false)
    {
        console.log("game started");
        started = true;

        levelUp();
    }
    
});

function gameFlash(btn){
     btn.classList.add("gameflash");
     setTimeout(function(){
        btn.classList.remove("gameflash")
     },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash")
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
   
    h2.innerHTML = `Level ${level} <br> Maximum Score : ${maxScore}`;


    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randButt = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randButt);
}

function checkAns(idx){
    //console.log("curr level :", level);
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx])
    {
       if(userSeq.length == gameSeq.length)
       {
        setTimeout(levelUp,1000);
       }
    }
    else{

           if(level > maxScore)
            {
             maxScore = level;
            }
       h2.innerHTML = `Game over! <b>Your Score was : ${level} </b>.<br> Your Highest Score is:${maxScore} <br> Press any key to start the game.`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },150);
       

       reset();
    }

}

function btnPress(){
    let btn = this;
    userFlash(btn);
    // console.log(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}