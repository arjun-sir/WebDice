var streak=0;
var highestStreak=0;

function correct() {
	alert("Correct ans");
	streak++;
	document.getElementById("cs").innerHTML = streak;
	document.getElementById("hs").innerHTML = highestStreak;
	nextImage();
}

function wrong() {
	alert("Wrong ans");
	highestStreak = streak;
	streak=0;
	document.getElementById("cs").innerHTML = streak;
	document.getElementById("hs").innerHTML = highestStreak;
	nextImage();
}

function darkMode() {
	var element = document.body;
	var element2 = document.querySelector("h1");
	element.classList.toggle("dark-mode");
	element2.classList.toggle("dark-mode");
}

shinchanImages=['./s1.jpg','./s2.jpg','./s3.jpg','./s4.jpg','./s5.jpg'];

function nextImage(){
	//Choosing Random image
	img=shinchanImages[Math.floor(Math.random()*shinchanImages.length)];
	//Setting that random image
	document.getElementById('shinchan').src=img;
}