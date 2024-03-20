/** <!-- Exercise 2 Solution, Chapter 9 --> */
define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'Magento_Customer/js/customer-data',
    'Magento_Checkout/js/model/totals',
    'domReady!'
], function ($, modal, customerData, totals) {
    'use strict';

    return function (config) {
        const customer = customerData.get('customer')();

        const popupOptions = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            title: 'Special Offer',
            buttons: [{
                text: $.mage.__('Close'),
                class: '',
                click: function () {
                    this.closeModal();
                }
            }]
        };

        const popup = modal(popupOptions, $('#exit-popup-modal-content'));

        $(document).on('mouseleave', function () {
            let subtotal = 0.00;

            if (totals.totals()) {
                subtotal = parseFloat(totals.totals()['subtotal']);
            }

            if (customer.fullname === undefined && subtotal < 200) {
                // $('#exit-popup-modal-content').modal('openModal');
            }
        });
    };
});
/** <!-- /end solution --> */
