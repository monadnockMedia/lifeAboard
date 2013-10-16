
/* Bio Screen */
$(".biography").click(function(e) {
	$(this).fadeOut(500);
	$(".selectSign").delay( 250 ).fadeIn( 500 );
})


/* Select your initial book by cover */
$(".coverLeft").click(function(e) {
	e.preventDefault();
	
	$(this).addClass("disabled");
	currentAuthor = 1;
	
	//Hide unclicked book, selection sign
	$(".coverRight").fadeOut( 500 );
	$(".selectSign").delay( 250 ).animate({top: "+=160", opacity:0}, 500, function() {});
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("daveySelect");
	$(".btmLeft").addClass("captainSelect");
	$(".pageTab").removeClass("davy");	
	$(".pageTab").addClass("captain");
	
	//Load first page
	ajSettings.data = {"authorID":1, "categoryID":1};
	ajResp = $.ajax(ajSettings);
	
	$(".btmLeft").delay( 550 ).fadeIn( 400 );
	
	$( this ).delay( 250 ).animate({left: "+=593"}, 700, function() {
		showTabs();
	});
})

$(".coverRight").click(function(e) {
	e.preventDefault();
	
	$(this).addClass("disabled");
	currentAuthor = 2;
	
	$(".book_wrapper").toggleClass("davyFont");
	
	//Hide unclicked book, selection sign	
	$(".coverLeft").fadeOut( 500 );
	$(".selectSign").delay( 250 ).animate({top: "+=160", opacity:0}, 500, function() {});
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("captainSelect");
	$(".btmLeft").addClass("daveySelect");
	$(".pageTab").removeClass("captain");	
	$(".pageTab").addClass("davy");
	
	//Load first page
	ajSettings.data = {"authorID":2, "categoryID":1};
	ajResp = $.ajax(ajSettings);
	
	$(".btmLeft").delay( 550 ).fadeIn( 400 );
	
	$( this ).delay( 250 ).animate({left: "-=40"}, 700, function() {
		showTabs();
	});
})

function showTabs() {
	//Show the tabs
	//$(".btmRight").delay( 0 ).fadeIn( 400 );
	$(".btmRight").fadeIn( 400 ).animate({top: "+=208", opacity:1}, 500, function() {});
}

function showBook() {
	//Show the book
	$(".book_wrapper").delay( 0 ).fadeIn( 400 );
	$(".coverLeft").delay( 0 ).fadeOut( 400 );
	$(".coverRight").delay( 0 ).fadeOut( 400 );
}



/* Page Tabs that load journal entries at bottom right */
$(".pageTab").click(function(e) {
	e.preventDefault();
	
	$(".next_page_button").fadeIn(250);
	$(".prev_page_button").fadeOut(250);
	
	if (!bookOpened) {
		bookOpened = true;
		$(".pageTab").removeClass("active");
		$(this).toggleClass("active");
		showBook();
		
	}
})

$(".pageTab").click(function(e) {
	ajSettings.data.categoryID = $(this).attr("categoryID");
	ajSettings.data.authorID = currentAuthor;
	
	ajResp = $.ajax(ajSettings);
	
	e.preventDefault();
	
	$(".pageTab").removeClass("active");
	$(this).toggleClass("active");
});

$(".next_page_button").click(function(e) {
	e.preventDefault();
	$(this).fadeOut(250);
	$(".prev_page_button").fadeIn(250);
	$('#mybook').booklet("next");
});

$(".prev_page_button").click(function(e) {
	e.preventDefault();
	$(this).fadeOut(250);
	$(".next_page_button").fadeIn(250);
	$('#mybook').booklet("prev");
});

$("body").on( "click", ".translator", function() {
	$(".translation").fadeOut( 125, function() {
	    $(".translation").toggleClass("active");
		$(".translation").fadeIn(125);
	  });
});



/* Journal Spine chooses which book you are viewing */
$(".journalSpine").click(function(e) {
	e.preventDefault();
	
	$(".b-load").empty();
	$(".next_page_button").fadeIn(250);
	$(".prev_page_button").fadeOut(250);
	
	if ($(this).attr("author") == 1) {
		currentAuthor = 1;
		ajSettings.data = {"authorID":1, "categoryID":5};
		$(".btmLeft").removeClass("daveySelect");
		$(".btmLeft").addClass("captainSelect");
		$(".pageTab").removeClass("davy active");	
		$(".pageTab").addClass("captain");	
		$(".book_wrapper").removeClass("davyFont");
		$(".coverLeft").addClass("capnCover");
		$(".coverRight").addClass("capnCover");
		$(".coverLeft").removeClass("davyCover");
		$(".coverRight").removeClass("davyCover");
		$(".firstTab").addClass("active");
	} else if ($(this).attr("author") == 2) {
		currentAuthor = 2;
		ajSettings.data = {"authorID":2, "categoryID":5};
		$(".btmLeft").removeClass("captainSelect");
		$(".btmLeft").addClass("daveySelect");
		$(".pageTab").removeClass("captain active");
		$(".pageTab").addClass("davy");
		$(".book_wrapper").addClass("davyFont");
		$(".coverLeft").addClass("davyCover");
		$(".coverRight").addClass("davyCover");
		$(".coverLeft").removeClass("capnCover");
		$(".coverRight").removeClass("capnCover");
		$(".firstTab").addClass("active");
	}

	ajResp = $.ajax(ajSettings);	
})

$( document ).ajaxComplete(function() {
	loadText();
});

function loadText() {
	$(".b-load").empty();
	$(".b-load").append(ajResp.responseText);
	resetBook();
}

