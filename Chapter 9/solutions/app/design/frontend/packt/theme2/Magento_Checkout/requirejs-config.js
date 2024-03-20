let config = {
    map: {
        '*': {
            confetti: 'Magento_Checkout/js/lib/jquery.vnm.confettiButton',

            /** <!-- Exercise 1 Solution, Chapter 9 --> */
            confettiDeclarative: 'Magento_Checkout/js/model/confetti-declarative'
            /** <!-- /end solution --> */
        }
    },

    shim: {
        'Magento_Checkout/js/lib/jquery.vnm.confettiButton': {
            deps: ['jquery']
        }
    }
};
