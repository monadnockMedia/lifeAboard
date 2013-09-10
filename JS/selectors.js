

/* Select your initial book by cover */
$(".coverLeft").click(function(e){
	e.preventDefault();
	
	//Hide main menu
	$(".coverLeft").addClass("hidden");
	$(".coverRight").addClass("hidden");
	$(".selectSign").addClass("hidden");
	
	//Set correct page tabs
	$(".pageTab").each(function(index) {
		console.log($(this).attr("categoryID"));

		if ($(this).attr("categoryID") == 1) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_02.png')");
		} else if ($(this).attr("categoryID") == 2) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_06.png')");
		} else if ($(this).attr("categoryID") == 3) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_10.png')");
		} else if ($(this).attr("categoryID") == 4) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_14.png')");
		} else if ($(this).attr("categoryID") == 5) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_18.png')");
		}
	});
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("daveySelect");
	$(".btmLeft").addClass("captainSelect");
	
	//Show the book + tabs
	$(".btmLeft").removeClass("hidden");
	$(".btmRight").removeClass("hidden");
	$(".book_wrapper").removeClass("hidden");
})

$(".coverRight").click(function(e){
	e.preventDefault();
	
	//Hide main menu
	$(".coverLeft").addClass("hidden");
	$(".coverRight").addClass("hidden");
	$(".selectSign").addClass("hidden");
	
	//Set correct page tabs
	$(".pageTab").each(function(index) {
		console.log($(this).attr("categoryID"));
		
		if ($(this).attr("categoryID") == 1) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_00.png')");
		} else if ($(this).attr("categoryID") == 2) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_04.png')");
		} else if ($(this).attr("categoryID") == 3) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_08.png')");
		} else if ($(this).attr("categoryID") == 4) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_12.png')");
		} else if ($(this).attr("categoryID") == 5) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_16.png')");
		}
	});
	
	//Set correct bookspine highlight
	$(".btmLeft").removeClass("captainSelect");
	$(".btmLeft").addClass("daveySelect");
	
	//Show the book + tabs
	$(".btmLeft").removeClass("hidden");
	$(".btmRight").removeClass("hidden");
	$(".book_wrapper").removeClass("hidden");
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
		if ($(this).attr("categoryID") == 1) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_03.png')");
		} else if ($(this).attr("categoryID") == 2) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_07.png')");
		} else if ($(this).attr("categoryID") == 3) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_11.png')");
		} else if ($(this).attr("categoryID") == 4) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_15.png')");
		} else if ($(this).attr("categoryID") == 5) {
			$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_19.png')");
		}
	}
		
	if ($(".btmLeft").hasClass("daveySelect")) {
		if ($(this).attr("categoryID") == 1) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_01.png')");
		} else if ($(this).attr("categoryID") == 2) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_05.png')");
		} else if ($(this).attr("categoryID") == 3) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_09.png')");
		} else if ($(this).attr("categoryID") == 4) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_13.png')");
		} else if ($(this).attr("categoryID") == 5) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_17.png')");
		}
	}
	
	$mybook.booklet("next");
})


/* Journal Spine chooses which book you are viewing */
$(".journalSpine").click(function(e){
	e.preventDefault();
	
	if ($(this).attr("author") == 1) {
		$(".btmLeft").removeClass("daveySelect");
		$(".btmLeft").addClass("captainSelect");
		
		$(".pageTab").each(function(index) {			
			if ($(this).attr("categoryID") == 1) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_02.png')");
			} else if ($(this).attr("categoryID") == 2) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_06.png')");
			} else if ($(this).attr("categoryID") == 3) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_10.png')");
			} else if ($(this).attr("categoryID") == 4) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_14.png')");
			} else if ($(this).attr("categoryID") == 5) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_18.png')");
			}
		});
	} else if ($(this).attr("author") == 2) {
		$(".btmLeft").removeClass("captainSelect");
		$(".btmLeft").addClass("daveySelect");
		
		$(".pageTab").each(function(index) {			
			if ($(this).attr("categoryID") == 1) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_00.png')");
			} else if ($(this).attr("categoryID") == 2) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_04.png')");
			} else if ($(this).attr("categoryID") == 3) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_08.png')");
			} else if ($(this).attr("categoryID") == 4) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_12.png')");
			} else if ($(this).attr("categoryID") == 5) {
				$(this).css("background-image", "url('./IMAGES/matt/Bookmarks_16.png')");
			}
		});
	}	
})

