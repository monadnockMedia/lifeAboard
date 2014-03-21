var ajSettings = $.ajaxSettings;
var currentAuthor = 1;

ajSettings.url = "http://192.168.1.103:8080/lifeAboard/";
ajSettings.data = {"authorID":1, "categoryID":1};


var ajResp;
var htmlData;
var bookOpened;
var onPageTwo;

var pageturnTI = new Audio("SOUND/pageturn.wav");
var tabTI = new Audio('SOUND/pageturn.wav');
var book_closeTI = new Audio('SOUND/adasnd.wav');
var book_slideTI = new Audio('SOUND/book_slide3.wav');
var ada_sndTI = new Audio('SOUND/adasnd.wav');


/* Runs after page loaded */
$(document).ready(init);
//$.fx.interval = 5;

function init(){
	bookOpened = false;
	onPageTwo = false;
}

