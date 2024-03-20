let config = {
    map: {
        '*': {
            confetti: 'Magento_Checkout/js/lib/jquery.vnm.confettiButton'
        }
    },

    shim: {
        'Magento_Checkout/js/lib/jquery.vnm.confettiButton': {
            deps: ['jquery']
        }
    }
};
