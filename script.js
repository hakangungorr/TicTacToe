let chosenButton = document.querySelectorAll(".btn-option")
let resetButton = document.querySelector(".btn-reset")
let turnButton = document.querySelector(".btn-turn");
let result= document.querySelector(".js-result")
let winX = document.querySelector(".count-X")
let winY = document.querySelector(".count-Y")
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

xTurn=true;  //identify turning pattern 
count= 0
countwinX=0
countwinY=0
let xResult = []
let oResult = []


function disableButton(){
  chosenButton.forEach((element)=>{
    element.disabled = true;
  }
  )
}
function checkWinner(){
  if(xTurn===false){
    winningPattern.forEach((element)=>{
      if(element.every(item =>xResult.includes(item))){
        countwinX ++
        winX.innerText= `${countwinX}`
        result.innerText= 'Player X won'
        disableButton();
         
          
        
    
      }
    })

  }else if(xTurn===true){
    winningPattern.forEach((element)=>{
      if(element.every(item =>oResult.includes(item))){
        countwinY ++
        winY.innerText= `${countwinY}`
        result.innerText= 'Player Y won'

        disableButton();
         
        
    
      }
    })

}
}





chosenButton.forEach((element,index)=>{
 
 element.addEventListener("click", ()=>{
   if (xTurn){
     xTurn = false;
     xResult.push(index);
      element.innerText = 'X'
      element.disabled=true

}else{
  xTurn = true;
    element.innerText = 'O'
    element.disabled=true
    oResult.push(index)
    
}

checkWinner();
count ++

if (count === 9 && result.innerText===''){
result.innerText = "Draw"
console.log(result)



}
}
);
}
)


  resetButton.addEventListener("click", ()=>{
    chosenButton.forEach((element)=>{
      xResult = []
      oResult = []
      count=0
      countwinX=0
      countwinY=0
      xTurn=true;
      element.innerText= '';
      element.disabled= false;
      result.innerText = '';
      winX.innerText='';
      winY.innerText='';
  })})
  
  turnButton.addEventListener("click", ()=>{
    chosenButton.forEach((element)=>{
      xResult = []
      oResult = []
      count=0
      xTurn=true;
      element.innerText='';
      element.disabled = false;
      result.innerText = '';
    })})
    



