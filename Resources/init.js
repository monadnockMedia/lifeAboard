var ajSettings = $.ajaxSettings;
var currentAuthor = 1;

ajSettings.url = "http://monadnock.or.gs:8080/lifeAboard/";
ajSettings.data = {"authorID":1, "categoryID":1};


var ajResp;
var htmlData;
var bookOpened;
var onPageTwo;

var pageturnTI = Ti.Media.createSound('SOUND/pageturn.wav');
var tabTI = Ti.Media.createSound('SOUND/pageturn.wav');
var book_closeTI = Ti.Media.createSound('SOUND/adasnd.wav');
var book_slideTI = Ti.Media.createSound('SOUND/book_slide3.wav');
var ada_sndTI = Ti.Media.createSound('SOUND/adasnd.wav');


/* Runs after page loaded */
$(document).ready(init);
//$.fx.interval = 5;

function init(){
	air.Mouse.hide();
	
	bookOpened = false;
	onPageTwo = false;
}

