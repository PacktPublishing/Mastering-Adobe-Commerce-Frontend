define([
    'ko',
    'Magento_Customer/js/customer-data'
], function (ko, customerData) {
    'use strict';

    return {
       items: ko.observableArray([]),

       initialize: function () {
            // this.items = customerData.get('calculator');
       },

       removeProduct: function (sku) {
           this.items.remove(function(item) {
               return item.sku === sku;
           });

       },

       addProduct: function (product) {
           product = {
               "sku": "pr_" + parseInt(Math.random() * 100),
               "length": parseInt(Math.random() * 50),
               "width": parseInt(Math.random() * 50),
               "height": parseInt(Math.random() * 30),
               "weight": (Math.random() * 20).toFixed(2)
           };
           this.items.push(product);
       }
   };
});
