var skor = 0;
var tokats = Math.floor(Math.random() * 3 + 1);

function tokat() {
	document.getElementById("isa_img").style.animationName = "tokat";
	skor++;
	document.getElementById("isa_img").onclick = hello;
	if (tokats == 1){
		document.getElementById("tokat1").play();
		tokats = Math.floor(Math.random() * 3 + 1);
	} else if (tokats == 2){
		document.getElementById("tokat2").play();
		tokats = Math.floor(Math.random() * 3 + 1);
	} else if (tokats == 3){
		document.getElementById("tokat3").play();
		tokats = Math.floor(Math.random() * 3 + 1);
	}
	setTimeout(function(){
		document.getElementById("isa_img").style.animationName = "";
		document.getElementById("isa_img").onclick = tokat;
	}, 500);
}

function hello(){
	
}

var interval = setInterval(function(){
	document.getElementById("skor").innerText = skor;
	document.getElementById("en_skor").innerText = localStorage.getItem("en_skor");
	if (skor > localStorage.getItem("en_skor")) {
		localStorage.setItem("en_skor", skor);
	} else if (localStorage.getItem("en_skor") == null) {
		localStorage.setItem("en_skor", skor);
	}
}, 1);
