// JavaScript Document

function toggleClass(){
	
	var element = document.getElementById('contact');
	element.classList.toggle('active')
}

var inputFornavn = document.getElementById('fornavn');
var inputEfternavn = document.getElementById('efternavn');
var inputEmail = document.getElementById('email');
var inputTelefon = document.getElementById('telefon');
var inputTextsted = document.getElementById('textsted');
var button = document.querySelector('.submit');
var regex =/\S+@\S+\.\S+/;

function check(){
	if (inputFornavn.value.trim() !== '' && inputEfternavn.value.trim() !== '' && regex.test(inputEmail.value) && inputTelefon.value.trim() !== '' &&
	inputTextsted.value.trim() !== ''){
		button.style.backgroundColor = '#fa923f';
		button.disabled = false;
	}else {
		button.style.backgroundColor = '#979695';
		button.disabled = true;
	}
}