$(document).ready(function(){

	var thispic;
	var actual;

	$('.pic').click(show);
	$('#prev').click(prevPic);
	$('#next').click(nextPic);
	$('#close').click(close);


	function show(){
		$('#showcase').css('visibility', 'visible');
		thispic = $(this);
		var pic = thispic.attr('src');
		$('#thispic').attr('src', pic);
		console.log(thispic);
		actualPic();
	}

	function actualPic(){
		actual = $('#thispic').attr('src');
		thispic = $('.pic[src*="'+actual+'"]');
		console.log(thispic);
	}

	function prevPic(){
		var pic = thispic.prev().attr('src');
		console.log(pic);
		$('#thispic').attr('src', pic);
		actualPic();
	}

	function nextPic(){
		var pic = thispic.next().attr('src');
		console.log(pic);
		$('#thispic').attr('src', pic);
		actualPic();
	}

	function close(){
		$('#showcase').css('visibility', 'hidden');
	}

});