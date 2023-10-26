

const buttons=document.querySelectorAll(".btn");
const screen=document.getElementById("screen")

buttons.forEach((button)=>{
  button.addEventListener('click',handleButtonClick)
})
function handleButtonClick(e){
  console.log("click")
if(e.target.value==="clear"){
  screen.innerText=""
}
else if(e.target.value==="="){
  const res=calculateExpression(screen.innerText);
  screen.innerText="";
  screen.innerText=`${res}`
}
else{
  screen.innerText+=e.target.value
}

}

function calculateExpression(expression) {
  try {
      const result = eval(expression);
      return result;
  } catch (error) {
  
      return "Error";
  }
}

