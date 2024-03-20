let config = {
    map: {
        '*': {
            jsUiComponent:  'PacktPub_JavaScriptPlayground/js/js-uicomponent',
            jsWidget:       'PacktPub_JavaScriptPlayground/js/js-widget'
        }
    },

    config: {
        mixins: {
            'PacktPub_JavaScriptPlayground/js/js-function': {
                'PacktPub_JavaScriptPlayground/js/mixins/js-function': true
            },

            'PacktPub_JavaScriptPlayground/js/js-object': {
                'PacktPub_JavaScriptPlayground/js/mixins/js-object': true
            },

            'Magento_Catalog/js/catalog-add-to-cart': {
                'PacktPub_JavaScriptPlayground/js/mixins/catalog-add-to-cart': true
            }
        }
    }
};