// JavaScript Document

//track input form

document.querySelector('#myform').addEventListener('change', (event)=>{
		console.log(event.target.value);										   
												   
	})

function myvalidation(){
	
	let myvalue = document.getElementById('myform').value;
	
	if ( isNaN(myvalue) || myvalue < 1 || myvalue > 20){
		
	}
}
