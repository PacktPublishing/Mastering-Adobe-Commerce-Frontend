/** <!-- Exercise 2, Chapter 12 Solution --> */
let config = {
    map: {
        '*': {
            stickyWidget: 'Magento_Checkout/js/lib/sticky',
        }
    },

    shim: {
        'Magento_Checkout/js/lib/sticky': {
            deps: ['jquery']
        }
    }
};
/** <!-- /end solution --> */
