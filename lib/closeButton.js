
var closeButton = {

    //sets up the event handlers for the button, and returns a jQuery object pointing to it
    init : function (jQuery, selector){
        var $closeButton = jQuery(selector);

        //events
        $closeButton.on("click", function (){
            var ipc = require("ipc");
            ipc.send("async-close-request","close request");
        });

        return $closeButton;
    }
}

module.exports = closeButton;
