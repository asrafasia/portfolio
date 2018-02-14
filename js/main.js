(function ($) {
	"use strict";

    jQuery(document).ready(function($){


            $('.port-item').click(function(){
                $('.collapse').collapse('hide');
            });


            $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
 



        


    });		//end document ready function


    jQuery(window).load(function(){

        
    });


}(jQuery));	