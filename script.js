let chosenButton = document.querySelectorAll(".btn-option")
let resetButton = document.querySelector(".btn-reset")
let result= document.querySelector(".js-result")
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
        console.log('winning')
        disableButton();
         
          
        
    
      }
    })

  }else if(xTurn===true){
    winningPattern.forEach((element)=>{
      if(element.every(item =>oResult.includes(item))){
        console.log('winning')
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

if (count === 9){
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
      element.innerText= '';
      element.disabled= false;
      count=0
      xTurn=true;
      result.innerText = '';
  })})
  
  
    



