const incrementBtn = document.querySelector("#increase-btn");
const resetBtn = document.querySelector("#resets-btn");
const decrementBtn = document.querySelector("#decrease-btn");
const mainValue = document.querySelector("#content-el");
let num = 0;



incrementBtn.addEventListener("click", function(){
	num = num + 1
	mainValue.innerHTML = num
	})



decrementBtn.addEventListener("click", function(){
	if(num > 0){
	num = num - 1
	mainValue.innerHTML = num	
	}
	
	})

resetBtn.addEventListener("click", function(){
	num = num - num
	mainValue.innerHTML = num
})