var QuoraExtension =
{
    /* Initialize Quora Extension */
    main: function()
    {
        QuoraExtension.hideContent();
    },

    /* Hide Selected Content From Quora */
    hideContent: function()
    {
        $(document).ready(
            function()
            {
                //Run the clean out as soon as possible
                QuoraExtension.hideTopContent();

                /*
                    Now, we add a listener for when the DOM tree is updated,
                    when it is, we check for more content to hide.

                    Timeouts are used to prevent infinite loops of removals
                    Removal of content can sometimes trigger another check,
                    so timeouts prevent us from using too much processing
                 */
                var hideTopContentTimeout = null;

                document.addEventListener("DOMSubtreeModified", function() {
                    if(hideTopContentTimeout) {
                        clearTimeout(hideTopContentTimeout);
                    }
                    hideTopContentTimeout = setTimeout(QuoraExtension.hideTopContent, 500);
                }, false);
            }
        );
    },

    /* Hide Top Content sections */
    hideTopContent: function()
    {
        var $topContent = jQuery("div:contains('Top Content on Quora')").closest('.pagedlist_item');
        $topContent.hide();
    }
};

// Initialize QuoraExtension if JQuery is available
if(!!jQuery)
{
    QuoraExtension.main();
}