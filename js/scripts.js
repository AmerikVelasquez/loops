
function robo(userInput) {
	let inputArray = []
	for (let i = 0; i <= userInput; i ++){
    const conclusion = i.toString();
    if (conclusion.includes(3)){
      inputArray.push("Won't you be my neighbor")
    }
    else if (conclusion.includes(2)){
      inputArray.push("Boop!")
    }
    else if (conclusion.includes(1)){
      inputArray.push("Beep!")
    }
    else {
      inputArray.push(conclusion)
    }
	}
 return inputArray; 
 
 
}


$(document).ready(function(){
  $().submit(function(event){
    event.preventDefault();

  });
});