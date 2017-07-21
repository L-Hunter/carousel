
var display = document.getElementById("display");
var backward = document.getElementById("backward");
var forward = document.getElementById("forward");

backward.addEventListener("click", previous);
forward.addEventListener("click", next);

var dot = "";
var count = 0;
var pictures = ['assets/images/beach.jpg', 'assets/images/grass.jpg','assets/images/snowyforest.jpg', 'assets/images/ozarks.jpg', 'assets/images/nasa.jpg'];

//display initial image
updateImage()
dots()

setTimeout(function(){
	next(); }, 3000);

//updates display
function updateImage(){
	display.style.backgroundImage = "url('" + pictures[count]+ "')";
}

//advances image array and nav dot
function next(){
	if (count == pictures.length - 1){
		count = 0;
	} else {
		count++;	
	}
	updateImage();
	dots();
}

//rewinds image array and nav dot
function previous(){
	if (count == 0){
		count = pictures.length - 1;
	} else {
		count--;
	}
	updateImage();
	dots();
}

//updates navigation dots
function dots(){
	//unselect previous dot
	dot.innerHTML = "&#9678;";
	//select new dot
	dot = document.getElementById("n"+count)
	dot.innerHTML = "&#9673;"
}

//displays user selected image and nav dot
function selected(d){
	count = d;
	updateImage();
	dots();
}
