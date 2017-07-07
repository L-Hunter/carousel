
document.getElementById("display").style.backgroundImage = "url('assets/images/beach.jpg')";
var backward = document.getElementById("backward");
var forward = document.getElementById("forward");

backward.addEventListener("click", previous);
forward.addEventListener("click", next)
//advance slide show, Make the transitions smooth using simple effects

var count = 0
var pictures = ['assets/images/beach.jpg', 'assets/images/grass.jpg','assets/images/snowyforest.jpg']

function next(){
	console.log("show the next picture");

}

//reverse slide show, Make the transitions smooth using simple effects
function previous(){
	console.log("show the previous picture");
}

//Add a timeout which advances the slides every 5 seconds.