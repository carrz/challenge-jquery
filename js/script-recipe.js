$(document).ready( function(){
	console.log("holo");
});

$('#menu').hide();

$('.js-show-make').click(function(){
	$('.page').addClass('make');
});

$('.js-show-recipe').click(function(){
	$('.page').removeClass('make');
});