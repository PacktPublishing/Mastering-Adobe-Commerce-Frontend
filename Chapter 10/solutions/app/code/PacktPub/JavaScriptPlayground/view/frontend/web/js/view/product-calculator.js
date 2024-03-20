define([
    'jquery',
    'uiComponent',
    'ko',
    'PacktPub_JavaScriptPlayground/js/model/product-calculator',
    'Magento_Customer/js/customer-data'
], function ($, Component, ko, productCalculator, customerData) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();

            productCalculator.initialize();

            let data = customerData.get('calculator') || {};
        },

        volumetricVolume: ko.computed(function () {
            return productCalculator.items().reduce(function(accumulator, item) {
                return accumulator + (item.length * item.width * item.height / 1000);
            }, 0).toFixed(2);
        }),

        productCount: ko.computed(function() {
            return productCalculator.items().length;
        }),

        removeProduct: function (sku) {
            productCalculator.removeProduct(sku);
        },

        addProduct: function (item) {
            productCalculator.addProduct({});
        },

        getProducts: function() {
            return productCalculator.items;
        }
    });
});
