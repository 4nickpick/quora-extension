$(document).ready(function(){

	console.log("Quora extension started");
	
	$("#feed_visibility_wrapper").bind("DOMSubtreeModified", function() {
	    hideTopQuoraContents();
	});

	function hideTopQuoraContents(){
		$('div.EventHeader').each(function(i, heading) {
        var headingData = heading.innerHTML;
        console.log("Heading is "+headingData);
        var hasTopContent = headingData.indexOf("Top Content on Quora")!=-1;
        
        if(hasTopContent){
            $(heading).closest(".pagedlist_item").css('opacity','0.2');
        }
        console.log("Has top content = "+hasTopContent);
	});
	}

});