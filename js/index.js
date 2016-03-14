(function() {
    'use strict';

    $('.tabs').on('click', function(e) {
        var $li = $(e.target);
        if ($li.is('li')) {
            $li.siblings().removeClass('active');
            $li.addClass('active');
            $('.details').fadeOut('slow').addClass('hide');
            var data = $li.data('id');
            $('#' + data).removeClass('hide').fadeIn('slow');
        }
    });
})();
