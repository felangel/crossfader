$(document).ready(function() {
	var crossfader = setInterval(crossfade, 5000);
});

function crossfade() {
	var images = $('.crossfader').children('img');
	if(images.length < 2) {
		return;
	} else {
		console.log("crossfading");
		var imgsrc = $(images[0]).attr("src");
		$(images[0]).fadeOut(3000, postFadeOut);
	}
}

function postFadeOut() {
	var images = $('.crossfader').children('img');
	$(images[0]).css({"display": "", "z-index": "1"});
	$(images[1]).css({"display": "", "z-index": "3"});

	var oldTop = images[0];
	$(images[0]).remove();
	$('.crossfader').append(oldTop);
	images = $('.crossfader').children('img');
	$(images[1]).css({"display": "", "z-index": "2"});

}