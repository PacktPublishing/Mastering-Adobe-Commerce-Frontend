/** <!-- Exercise 4, Chapter 12 Solution --> */
define([
    'jquery',
    'Magento_Checkout/js/view/summary/abstract-total',
    'stickyWidget'
], function($, Component) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();
        },

        initSticky: function() {
            let stickyElement = $('.opc-summary-wrapper').theiaStickySidebar({
                'additionalMarginTop': 20,
            });
        }
    });
});
/** <!-- /end solution --> */
