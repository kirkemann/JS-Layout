// JavaScript Document

var lag1 = document.getElementById('lag1') 
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e) {
	var offset = window.pageYOffset;
	scroll = offset;
	lag1.style.width = (100 + scroll/5) + '%';
})

var lag2 = document.getElementById('lag2') 
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e) {
	var offset = window.pageYOffset;
	scroll = offset;
	lag2.style.width = (100 + scroll/5) + '%';
	lag2.style.left = scroll/50 + '%';
})

var text = document.getElementById('text') 
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e) {
	var offset = window.pageYOffset;
	scroll = offset;
	lag2.style.width = (100 + scroll/5) + '%';
	text.style.top = - scroll/20 + '%';
})
