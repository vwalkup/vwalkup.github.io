function showMore(){
	let more=document.getElementById("para");
	let linkText=document.getElementById("link");
if(more.classList.contains("hidden")){
	more.classList.remove("hidden");
	linkText.innerHTML="See Less...";
}
else{
	more.classList.add("hidden");
	linkText.innerHTML="See More...";
}
}

function showResults(){
let sectionResult=document.getElementById("result");
	let first=document.getElementById("txt-first").value;
	let second=document.getElementById("txt-second").value;
	let third=document.getElementById("txt-third").value;
	let fourth=document.getElementById("txt-fourth").value;
	sectionResult.classList.remove("hidden");
	let total=0;
if(first=="!DOCTYPE html"){
	total+=1;
	sectionResult.innerHTML+="<h3>Question 1 - Correct</h3>";
}else if(first){
	sectionResult.innerHTML+="<h3>Question 1 - Incorrect</h3>";
}
if(second=="Cascading Style Sheets"){
	total+=1;
	sectionResult.innerHTML+="<h3>Question 2 - Correct</h3>";
}else if(second){
	sectionResult.innerHTML+="<h3>Question 2 - Incorrect</h3>";
}
if(third=="JavaScript"){
	total+=1;
	sectionResult.innerHTML+="<h3>Question 3 - Correct</h3>";
}else if(third){
	sectionResult.innerHTML+="<h3>Question 3 - Incorrect</h3>";
}
if(fourth=="to program web page behavior"){
	total+=1;
	sectionResult.innerHTML+="<h3>Question 4 - Correct</h3>";
}else if(fourth){
	sectionResult.innerHTML+="<h3>Question 4 - Incorrect</h3>";
}
	sectionResult.innerHTML+="<p>Score:"+total+"/4</p>";
}

setInterval(changeSlide, 10000);
function changeSlide(){
	let img1=document.getElementById("nature");
	let img2=document.getElementById("alaska");
		let img3=document.getElementById("beach");
		let img4=document.getElementById("mountains");
if(!img1.classList.contains("hidden")){
	img1.classList.add("hidden");
	img2.classList.remove("hidden");
}
else if(!img2.classList.contains("hidden")){
	img2.classList.add("hidden");
	img3.classList.remove("hidden");
}
else if(!img3.classList.contains("hidden")){
	img3.classList.add("hidden");
	img4.classList.remove("hidden");
}
else if(!img4.classList.contains("hidden")){
	img4.classList.add("hidden");
	img1.classList.remove("hidden");
}
}
