		/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("left").style.width = "320px";
 
    document.body.style.backgroundColor = "rgba(255,255,255,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("left").style.width = "0";
  
    document.body.style.backgroundColor = "white";
}

function openRNav(){
  document.getElementById("rightmenu").style.minWidth = "320px";
 
    document.body.style.backgroundColor = "rgba(255,255,255,0.4)";
}
function closeRNav(){
document.getElementById("rightmenu").style.minWidth = "0";
}


		function myFunction(x) {	
    x.classList.toggle("change");	
	title=(x.getAttribute('title'));
	
	if(title=='open'){
	openNav();
	x.setAttribute("title","close");	
	}
	
	else {
	closeNav();
	x.setAttribute("title","open");
	}
} 

function myRightFunction(y){
y.classList.toggle("rightnew");
title=y.getAttribute('title');
if(title=='open'){
	openRNav();
	y.setAttribute("title","close");	
	}
	
	else {
	closeRNav();
	y.setAttribute("title","open");
	}
}

function clear(w){
w.classList.add("ad");
w.setAttribute("placeholder","")
}

function add(p){
p.classList.remove("ad");
if(p.getAttribute("title")==""){
p.setAttribute("placeholder","E-mail");
}
}
