// JavaScript Document

let loginVisPass = false

function visPass() {
	let visPass = document.getElementById('pass5');
	
	if (loginVisPass === false) {
		
	visPass.setAttribute('type', 'text');
		loginVisPass = true;
	}else if (loginVisPass === true) {
		visPass.setAttribute('type', 'password');
		loginVisPass =false;
		
	}
	
}

function changecolor (id) {
	
	document.body.style.background = document.getElementById(id).innerHTML;
}

