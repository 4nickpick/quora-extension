$(document).ready(function(){

	console.log("Quora extension started");

	var isContentAppended = false;

	$("#feed_visibility_wrapper").bind("DOMSubtreeModified", function() {
		isContentAppended = true;
	});

	setInterval(hideTopQuoraContents,1000);

	function hideTopQuoraContents(){
		if(!isContentAppended){

		}		
		$('div.EventHeader').each(function(i, heading) {
        var headingData = heading.innerHTML;
        var hasTopContent = headingData.indexOf("Top Content on Quora")!=-1;
        
        if(hasTopContent){
            $(heading).closest(".pagedlist_item").css('opacity','0.2');
        }
        console.log("Managed "+i);
	});
	}

});