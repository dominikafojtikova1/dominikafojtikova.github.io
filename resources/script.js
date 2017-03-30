
// activate the close button
$(".close-button").click(function(){
	// hide the section
	$('.detail').hide();
	console.log('close')
});
					
// activate the navigation links 

console.log($(".anim"))

$(".anim").click(function(){

	
	console.log($(this))
	console.log("clicked: " + $(this).attr('id'));

	// use variables for readability
	var id = $(this).attr('id');	
	$("#content-" + id).show();
});

