var ajSettings = $.ajaxSettings;
var currentAuthor = 1;

ajSettings.url = "http://server.local:8080/lifeAboard/";
ajSettings.data = {"authorID":1, "categoryID":1};


var ajResp;
var htmlData;
var bookOpened;



/* Runs after page loaded */
$(document).ready(init);
$.fx.interval = 35;

function init(){
	bookOpened = false;
}

