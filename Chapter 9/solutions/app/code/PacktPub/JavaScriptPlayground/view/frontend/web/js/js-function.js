define(['jquery'], function($) {
    'use strict';

    return function (config, element) {
        let el = $(element);
        let clickTimes = parseInt($('#times').data('clicked'));
        clickTimes++;

        $('#times').data('clicked', clickTimes);
        $('#times').html(clickTimes);
    }
});