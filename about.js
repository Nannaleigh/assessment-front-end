console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted! Thanks!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector("#cat")
img.addEventListener('mouseover',() => {
	alert("This cat is smiling because of you!")
})