
var display = document.getElementById("display");
var backward = document.getElementById("backward");
var forward = document.getElementById("forward");
var count = 0;
var pictures = ['assets/images/beach.jpg', 'assets/images/grass.jpg','assets/images/snowyforest.jpg']

backward.addEventListener("click", previous);
forward.addEventListener("click", next)
//Make the transitions smooth using simple effects

display.style.backgroundImage = "url('" + pictures[count]+ "')";


function next(){
	console.log("show the next picture");
	if (count == pictures.length - 1){
		count = 0;
	} else {
		count ++;	
	}
	display.style.backgroundImage = "url('" + pictures[count]+ "')";
}

//Make the transitions smooth using simple effects
function previous(){
	console.log("show the previous picture");
	if (count == 0){
		count = pictures.length - 1;
	} else {
		count --;
	}
	display.style.backgroundImage = "url('" + pictures[count]+ "')";
}

//Add a timeout which advances the slides every 5 seconds.