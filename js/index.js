(function() {
    'use strict';

    $('.tab').on('click', function(e) {
        // var $li = $(e.target);
        // if ($li.is('li')) {
        //     $li.siblings().removeClass('active');
        //     $li.addClass('active');
        //     $('.details').fadeOut('slow').addClass('hide');
        //     var data = $li.data('id');
        //     $('#' + data).removeClass('hide').fadeIn('slow');
        // }
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.details').fadeOut('slow').addClass('hide');
        var data = $(this).data('id');
        $('#' + data).removeClass('hide').fadeIn('slow');
    });
})();
