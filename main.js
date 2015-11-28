
$(document).ready(function(){
	
	console.log("Quora extension started");
	var isContentAppended = true;
	hideTopQuoraContents();
	
	$("div#feed_visibility_wrapper").slideDown(500);

	$("#feed_visibility_wrapper").bind("DOMSubtreeModified", function() {
		isContentAppended = true;
	});

	setInterval(hideTopQuoraContents,1000);

	function hideTopQuoraContents(){
		
		if(!isContentAppended){
			console.log("Content not appended");
			return;
		}		
		
		$('div.EventHeader').each(function(i, heading) {
			var headingData = heading.innerHTML;
			var hasTopContent = headingData.indexOf("Top Content on Quora")!=-1;
			
			if(hasTopContent){
				$(heading).closest(".pagedlist_item").hide();
			}
			console.log("Managed "+i);
		});
		
		console.log("Finished");
		isContentAppended = false;
	}

});