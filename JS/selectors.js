
/* Page tabs that load journal entries at bottom right */
$(".pageTab").click(function(){
	argsLeft.categoryID = $(this).attr("categoryID");
	console.log("cat id:" + argsLeft.categoryID);
	
	$(".topLeft").finish();
	$(".topLeft").animate({opacity:0}, 0);
	
	$(".pageTab").removeClass("active");
	$( this ).addClass("active");
	offset = $( this ).offset();
	$arr = $("#arrow")
	top = offset.top;
	left = offset.left;
	$("#arrow").css({"top":offset.top, "left":left}).css({"opacity":1});
	
	$(".topLeft").load(url, argsLeft);
	$(".topLeft").animate({opacity:1}, "slow");
})