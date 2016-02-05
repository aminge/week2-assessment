var numClicks = 0;

$(document).ready(function(){
	$('#gandalf').data('numClicks', numClicks);

	$('body').prepend('<p id="counter">Number of clicks of generate button: ' + numClicks + '</p>');

	$('#gandalf').on('click', function() {
		$('body').append('<div class="frodo"><button class="delete">delete</button><button class="change">change</button></div>');
		numClicks++;
		$('#counter').remove();
		$('body').prepend('<p id="counter">Number of clicks of generate button: ' + numClicks + '</p>');
		$(this).children().last().addClass('yellow');
		//trying to get the most recently added class to be yellow
	});

	$('body').on('click', '.delete', function() {
		$(this).parent().remove();
	});

	$('body').on('click', '.change', function(){
		$(this).parent().toggleClass('yellow red');
	});
});

// I know that the stylesheet is loading before this file, so I am trying to
// figure out how to get the frodo class (the container of the delete and change
// buttons) to toggle between yellow and red. If use inline styling to make it
// yellow, then it won't toggle. But if I use a class in the stylesheet, it won't
// start off yellow (and I can't get it to switch to red). I just thought of using
// a check for numClicks % 2 to check for which class to add and remove, but I
// don't have time to add it in now, and there must be an easier way to get it to
// work.