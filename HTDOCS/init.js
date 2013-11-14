var ajSettings = $.ajaxSettings;
var currentAuthor = 1;

ajSettings.url = "http://0.0.0.0:8080/lifeAboard/";
ajSettings.data = {"authorID":1, "categoryID":1};


var ajResp;
var htmlData;
var bookOpened;
var onPageTwo;



/* Runs after page loaded */
$(document).ready(init);
$.fx.interval = 35;

function init(){
	
	
	
	air.Mouse.hide();
	
	bookOpened = false;
	onPageTwo = false;
}

