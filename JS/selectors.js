
/* Page tabs that load journal entries at bottom right */
$(".pageTab").click(function(e){
	/*argsLeft.categoryID = $(this).attr("categoryID");
	console.log("cat id:" + argsLeft.categoryID);
	
	$(".topLeft").finish();
	$(".topLeft").animate({opacity:0}, 0);*/
	
	e.preventDefault();
	
	$(".pageTab").removeClass("active");
	$( this ).addClass("active");	
	$mybook.booklet("next");
	
	/*
	$(".topLeft").load(url, argsLeft);
	$(".topLeft").animate({opacity:1}, "slow");
	*/
})

/* Journal Spine chooses which book you are viewing */
$(".journalSpine").click(function(e){
	
	e.preventDefault();
	
	if ($(this).attr("author") == 1) {
		$(".btmLeft").removeClass("daveySelect");
		$(".btmLeft").addClass("captainSelect");
	} else if ($(this).attr("author") == 2) {
		$(".btmLeft").removeClass("captainSelect");
		$(".btmLeft").addClass("daveySelect");
	}
	
})