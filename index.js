$(document).ready(function() {


function loadThumbs(numImages) {
	for(var i=0; i<numImages; i++) {
		$('.images').prepend("<img class='thumb' id='"+(i+1)+"'src='thumbs/"+(i+1)+".jpg' />");
	}
}

function loadLarge(numImages) {
	for(var i=0; i<numImages; i++) {
		$('.images').prepend("<img class='large' id='"+(i+1)+"-large'src='images-large/"+(i+1)+".jpg' />");
	}
}

loadThumbs(13);
loadLarge(13);
$('.large').hide();
$('.thumb').hide();
$('.thumb').fadeIn(4000);


$('.thumb').click(function(event) {
	var id = $(event.target).find('img').context.id;
	console.log(id);

	$('.thumb').fadeOut();

	$('#'+id+'-large').fadeIn();

});

$('.large').click(function() {
	$(this).fadeOut();
	$('.thumb').fadeIn(2000);
})




})