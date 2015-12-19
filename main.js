
//Hide @first load
$("div.EventHeader:contains('Popular on Quora')").closest('.pagedlist_item').hide();

$(document).ready(function(){
	
	//Hide @page finished loading
	$("div.EventHeader:contains('Popular on Quora')").closest('.pagedlist_item').hide();
	
	//Hide @oneach load
	$("#feed_visibility_wrapper").bind("DOMSubtreeModified", function() {
		$("div.EventHeader:contains('Popular on Quora')").closest('.pagedlist_item').hide();
	});

});
