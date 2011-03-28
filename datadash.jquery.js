(function($){
    $.fn.extend({
        datadash: function(name, value) {
            if(!value){
                return $(this).attr('data-'+name);
            } else{
                $(this).attr('data-'+name, value);
                return true;
            }
        }
    });
})(jQuery);