
var display = document.getElementById("display");
var backward = document.getElementById("backward");
var forward = document.getElementById("forward");
var n0 = document.getElementById("n0");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");

var count = 0;
var pictures = ['assets/images/beach.jpg', 'assets/images/grass.jpg','assets/images/snowyforest.jpg', 'assets/images/ozarks.jpg', 'assets/images/nasa.jpg'];

backward.addEventListener("click", previous);
forward.addEventListener("click", next);
n1.addEventListener("click", selected);

display.style.backgroundImage = "url('" + pictures[count]+ "')";

setTimeout(function(){
	next(); }, 3000);

function next(){
	console.log("show the next picture");
	if (count == pictures.length - 1){
		count = 0;
	} else {
		count++;	
	}
	display.style.backgroundImage = "url('" + pictures[count]+ "')";
}

function previous(){
	console.log("show the previous picture");
	if (count == 0){
		count = pictures.length - 1;
	} else {
		count--;
	}
	display.style.backgroundImage = "url('" + pictures[count]+ "')";
}

function selected(){
	n1.innerHTML = "&#9673;";
	display.style.backgroundImage = "url('" + pictures[1]+ "')";
	n0.innerHTML = "&#9678;";
}
