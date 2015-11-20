$(document).ready(function() {

	$('#ryu-ready').hide();
	$('#ryu-cool').hide();
	$('#ryu-throw').hide();
	$('.hadouken-container').hide();

	$('.ryu-container').mouseenter(function(){
		$('#ryu-still').hide();
		$('#ryu-cool').hide();
		$('#ryu-ready').show();
		$('.ryu-container').css('cursor','pointer')
	});

	$('.ryu-container').mouseleave(function(){
		$('#ryu-still').show();
		$('#ryu-cool').hide();
		$('#ryu-ready').hide();
	});

	$(document).keydown(function(i){
		// console.log(i);
		if (i.keyCode == 88){
			$('#ryu-still').hide();
			$('#ryu-ready').hide();
			$('#ryu-cool').show();
			$('#hadouken-sound')
		}

	});
	$(document).keyup(function(i){
		// console.log(i);
		if (i.keyCode == 88){
			$('#ryu-still').show();
			$('#ryu-ready').hide();
			$('#ryu-cool').hide();
		}

	});
	$('.ryu-container').mousedown(function(){
		$('#ryu-still').hide();
		$('#ryu-ready').hide();
		$('#ryu-cool').hide();
		$('#ryu-throw').show();
		$('.hadouken-container').show();
		$('#hadouken').animate({
			marginLeft: "100%",
			opacity:0
		},1500);
		document.getElementById('hadouken-sound').play()
	});
	$('.ryu-container').mouseup(function(){
		$('#ryu-still').show();
		$('#ryu-ready').hide();
		$('#ryu-cool').hide();
		$('#ryu-throw').hide();
		$('.hadouken-container').hide();
		$('#hadouken').animate({
			marginLeft:"0%",
			opacity:100
		},2);
	});

});
