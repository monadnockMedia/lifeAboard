


/* Select your initial book by cover */
$(".coverLeft").click(function(e){
	e.preventDefault();
	currentAuthor = 1;
	
	//Hide main menu	
	$(".coverLeft").fadeOut( 500 );
	$(".coverRight").fadeOut( 500 );
	$(".selectSign").fadeOut( 500 );
	
	//Set correct page tabs
	$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_blue.png')");
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("daveySelect");
	$(".btmLeft").addClass("captainSelect");
	
	
	//Show the book + tabs
	$(".btmLeft").slideUp( 500 ).delay( 550 ).fadeIn( 400 );
	$(".book_wrapper").slideUp( 500 ).delay( 1150 ).fadeIn( 400 );
	$(".btmRight").slideUp( 500 ).delay( 1550 ).fadeIn( 400 );
})

$(".coverRight").click(function(e){
	e.preventDefault();
	currentAuthor = 2;
	
	//Hide main menu	
	$(".coverLeft").fadeOut( 500 );
	$(".coverRight").fadeOut( 500 );
	$(".selectSign").fadeOut( 500 );
	
	//Set correct page tabs
	$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_red.png')");
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("captainSelect");
	$(".btmLeft").addClass("daveySelect");
	
	//Show the book + tabs
	$(".btmLeft").slideUp( 500 ).delay( 550 ).fadeIn( 400 );
	$(".book_wrapper").slideUp( 500 ).delay( 1150 ).fadeIn( 400 );
	$(".btmRight").slideUp( 500 ).delay( 1550 ).fadeIn( 400 );	
})



/* Page Tabs that load journal entries at bottom right */
$(".pageTab").click(function(e){
	ajSettings.data = {"authorID":1, "categoryID":1};
	ajSettings.data.categoryID = $(this).attr("categoryID");
	ajSettings.data.authorID = currentAuthor;
	
	ajResp = $.ajax(ajSettings);
	
	e.preventDefault();
	
	if ($(".btmLeft").hasClass("captainSelect")) {
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_blue.png')");
		$(this).css("background-image", "url('./IMAGES/tabs/ribbon_blue_active.png')");
	}
		
	if ($(".btmLeft").hasClass("daveySelect")) {
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_red.png')");
		$(this).css("background-image", "url('./IMAGES/tabs/ribbon_red_active.png')");
	}
})

$( document ).ajaxComplete(function() {
	blahblah();
});

function blahblah() {
	$(".b-load").empty();
	$(".b-load").append(ajResp.responseText);
	resetBook();
}



/* Journal Spine chooses which book you are viewing */
$(".journalSpine").click(function(e){
	e.preventDefault();
	
	$(".b-load").empty();
	
	if ($(this).attr("author") == 1) {
		currentAuthor = 1;
		$(".btmLeft").removeClass("daveySelect");
		$(".btmLeft").addClass("captainSelect");		
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_blue.png')");
	} else if ($(this).attr("author") == 2) {
		currentAuthor = 2;
		$(".btmLeft").removeClass("captainSelect");
		$(".btmLeft").addClass("daveySelect");
		
		$(".pageTab").css("background-image", "url('./IMAGES/tabs/ribbon_red.png')");
	}	
})


