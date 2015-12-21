
//Used to hide top content on quora
function hidePopularContent(){
	$("div.EventHeader:contains('Popular on Quora')").closest('.pagedlist_item').hide();
}

//Hide content at startup
hidePopularContent();

$(document).ready(function(){
	
	//Hide content on first page load.
	hidePopularContent();
	
	$("#feed_visibility_wrapper").bind("DOMSubtreeModified", function() {
		//Hide content on each update
		hidePopularContent();
	});

});