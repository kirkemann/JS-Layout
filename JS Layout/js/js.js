// JavaScript Document

function skriv_navn(){
	
	var velkommen_parra = document.getElementById('velkommen');
	var name = document.getElementById('name');
	
	velkommen_parra.innerHTML = 'Velkommen ' + name.value;
}