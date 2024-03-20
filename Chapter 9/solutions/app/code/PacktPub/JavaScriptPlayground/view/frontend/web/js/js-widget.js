define(['jquery'], function($) {
    'use strict';

    $.widget('packt.customWidget', {
        options: {

        },

        _create: function () {
            let el = this.element;
            el.on('click', function() {
                this.element.toggleClass('clicker');
            })
        }
    });

    return $.packt.customWidget;
});