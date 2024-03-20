/** <!-- Exercise 1 Solution, Chapter 9 --> */
define([
    'jquery',
    'Magento_Checkout/js/model/totals',
    'confetti',
    'domReady!'
], function ($, totals, confettButton) {
    'use strict';

    $(function () {
        if (totals.totals()) {
            const subtotal = parseFloat(totals.totals()['subtotal']);

            if (subtotal > 100) {
                $('.checkout').confettiButton();
            }
        }
    });
});
/** <!-- /end solution --> */
