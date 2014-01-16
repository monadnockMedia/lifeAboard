//Reset Tmer
var timer;
var selectTimer = setInterval(selectSignIdle, 6500);
var selectOnScreen = false;
var ADAEnabled = false;

$(document.body).click(function(e) {
	userStarted();
})

function restart() {
	document.location.href='';
}

function promptIdleUser() {   
    clearInterval(timer);
  	timer = setInterval(restart, 10000);

	$( "#dialog" ).dialog({
		height:250,
		width: 500,
		modal: true,
		resizable: false,
		show: {
			effect: "blind", duration: 250
		},
		hide: {
			effect: "blind", duration: 250
		},
		buttons: {
		  	"Yes": function()
			{
		    	$( this ).dialog( "close" );
				userStarted();
		  	}
		}
	}); // Shows the idle alert box.
}

function userStarted() {
	clearInterval(timer);
	timer = setInterval(promptIdleUser, 120000); // 30000
}

function selectSignIdle() {
	switch (selectOnScreen) {
		case true:  $(".selectSign").toggleClass('lit');
					//$("#overlay").toggleClass('lit');
					$("#overlay").animate({opacity:0}, 1000, "swing", function() {
						
					});
					$(".selectSign").animate({top: "+=360", opacity:1}, 1000, "swing", function() {
						
					});
					selectOnScreen = false;
					break;
		case false: $("#overlay").animate({opacity:1}, 1000, "swing", function() {
						
					});
					$(".selectSign").animate({top: "-=360", opacity:1}, 1000, "swing", function() {
						$(".selectSign").toggleClass('lit');
						//$("#overlay").toggleClass('lit');
					});
					
					selectOnScreen = true;
					break;
	}
}



$(".ada").click(function(e) {
	ada_snd.play();
	ada_sndTI.play();
		
	if (!ADAEnabled) {
		ADAEnabled = true;
		$("p").addClass("adaEnabled");
		$("h1").addClass("adaEnabled");
		$(".page").addClass("adaEnabled");
		$(".b-wrap-left").addClass("adaEnabled");
		$(".b-wrap-right").addClass("adaEnabled");
		$(".next_page_button").addClass("ADAButton");
		$(".prev_page_button").addClass("ADAButton");
	} else {
		ADAEnabled = false;
		$(".adaEnabled").removeClass("adaEnabled");
		$(".next_page_button").removeClass("ADAButton");
		$(".prev_page_button").removeClass("ADAButton");
	}
})


/* Select your initial book by cover */
$(".coverLeft").click(function(e) {
	book_slide.play();
	book_slideTI.play();
	clearInterval(selectTimer);
	e.preventDefault();
	
	$(document.body).toggleClass("DavyBG");
	$(this).addClass("disabled");
	$(".coverRight").addClass("disabled");
	currentAuthor = 1;
	
	//Hide unclicked book, selection sign
	$(".coverRight").fadeOut( 500 );
	$(".selectSign").delay( 100 ).animate({opacity:0}, 500, function() {});
	$("#overlay").delay( 100 ).animate({opacity:0}, 500, function() {});
	
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
	book_slide.play();
	book_slideTI.play();
	clearInterval(selectTimer);
	e.preventDefault();
	
	$(this).addClass("disabled");
	$(".coverLeft").addClass("disabled");
	currentAuthor = 2;
	
	$(".book_wrapper").toggleClass("davyFont");
	
	//Hide unclicked book, selection sign	
	$(".coverLeft").fadeOut( 500 );
	$(".selectSign").delay( 100 ).animate({opacity:0}, 500, function() {});
	$("#overlay").delay( 100 ).animate({opacity:0}, 500, function() {});
		
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
	$(".btmRight").fadeIn( 400 ).animate({top: "+=208", opacity:1}, 500, function() {});
}

function showBook() {
	//Show the book
	$(".book_wrapper").delay( 0 ).fadeIn( 400 );
	$(".coverLeft").delay( 0 ).fadeOut( 400 );
	$(".coverRight").delay( 0 ).fadeOut( 400 );
}

function hideBook(author) {
	$(".book_wrapper").delay( 0 ).fadeOut( 400 );
	bookOpened = false;
	
	if (author == 1) {
		$( ".coverLeft" ).css("left", 593);
		$(".coverLeft").delay( 0 ).fadeIn( 300 );
		$(".coverRight").delay( 0 ).fadeOut( 500 );
	//	alert(author);
	} else if (author == 2) {
		$( ".coverRight" ).css("left", 600);
		$(".coverRight").delay( 0 ).fadeIn( 300 );
		$(".coverLeft").delay( 0 ).fadeOut( 500 );
	//	alert(author);
	}
}



/* Page Tabs that load journal entries at bottom right */
$(".pageTab").click(function(e) {
	tab.play();
	tabTI.play();
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
	pageturn.play();
	pageturnTI.play();
	e.preventDefault();
	$(this).fadeOut(250);
	$(".prev_page_button").fadeIn(250);
	$('#mybook').booklet("next");
});

$(".prev_page_button").click(function(e) {
	pageturn.play();
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
	book_close.play();
	book_closeTI.play();
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
		$(".firstTab").addClass("active");
		$(document.body).removeClass("DavyBG");
	} else if ($(this).attr("author") == 2) {
		currentAuthor = 2;
		ajSettings.data = {"authorID":2, "categoryID":5};
		$(".btmLeft").removeClass("captainSelect");
		$(".btmLeft").addClass("daveySelect");
		$(".pageTab").removeClass("captain active");
		$(".pageTab").addClass("davy");
		$(".book_wrapper").addClass("davyFont");
		$(".firstTab").addClass("active");
		$(document.body).addClass("DavyBG");
	}
	
	hideBook(currentAuthor);

	//ajResp = $.ajax(ajSettings);
})

$( document ).ajaxComplete(function() {
	loadText();
});

function loadText() {
	$(".b-load").empty();
	$(".b-load").append(ajResp.responseText);
	resetBook();
	
	if (ADAEnabled) {
		
		$("p").addClass("adaEnabled");
		$("h1").addClass("adaEnabled");
		$(".page").addClass("adaEnabled");
		$(".b-wrap-left").addClass("adaEnabled");
		$(".b-wrap-right").addClass("adaEnabled");
	} else {
		$(".adaEnabled").removeClass("adaEnabled");
	}
}

