(function($){
    $.fn.extend({
        datadash: function(name) {
            return $(this).attr('data-'+name);
        }
    });
})(jQuery);