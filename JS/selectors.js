


/* Select your initial book by cover */
$(".coverLeft").click(function(e){
	e.preventDefault();
	
	//Hide main menu	
	$(".coverLeft").fadeOut(1000);
	$(".coverRight").fadeOut(1000);
	$(".selectSign").fadeOut(1000);
	
	//Set correct page tabs
	$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_blue.png')");
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("daveySelect");
	$(".btmLeft").addClass("captainSelect");
	
	
	//Show the book + tabs
	$(".btmLeft").fadeIn(1000);
	$(".btmRight").fadeIn(1000);
	$(".book_wrapper").fadeIn(1000);
})

$(".coverRight").click(function(e){
	e.preventDefault();
	
	//Hide main menu	
	$(".coverLeft").fadeOut(1000);
	$(".coverRight").fadeOut(1000);
	$(".selectSign").fadeOut(1000);
	
	//Set correct page tabs
	$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_red.png')");
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("captainSelect");
	$(".btmLeft").addClass("daveySelect");
	
	//Show the book + tabs
	$(".btmLeft").fadeIn(1000);
	$(".btmRight").fadeIn(1000);
	$(".book_wrapper").fadeIn(1000);
})



/* Page Tabs that load journal entries at bottom right */
$(".pageTab").click(function(e){
	/*argsLeft.categoryID = $(this).attr("categoryID");
	console.log("cat id:" + argsLeft.categoryID);
	$(".topLeft").load(url, argsLeft);
	$(".topLeft").animate({opacity:1}, "slow");
	*/
	e.preventDefault();
	
	if ($(".btmLeft").hasClass("captainSelect")) {
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_blue.png')");
		$(this).css("background-image", "url('./IMAGES/tabs/ribbon_blue_active.png')");
	}
		
	if ($(".btmLeft").hasClass("daveySelect")) {
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_red.png')");
		$(this).css("background-image", "url('./IMAGES/tabs/ribbon_red_active.png')");
	}
	
	$mybook.booklet("next");
})



/* Journal Spine chooses which book you are viewing */
$(".journalSpine").click(function(e){
	e.preventDefault();
	
	if ($(this).attr("author") == 1) {
		$(".btmLeft").removeClass("daveySelect");
		$(".btmLeft").addClass("captainSelect");
		
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_blue.png')");
	} else if ($(this).attr("author") == 2) {
		$(".btmLeft").removeClass("captainSelect");
		$(".btmLeft").addClass("daveySelect");
		
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_red.png')");
	}	
})

