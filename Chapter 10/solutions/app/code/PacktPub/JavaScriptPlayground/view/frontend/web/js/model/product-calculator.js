/** <!-- Solution Exercise 1, Chapter 10 --> */
define([
    'ko',
    'Magento_Customer/js/customer-data'
], function (ko, customerData) {
    'use strict';

    return {
       items: ko.observableArray([]),

       initialize: function () {
           this.loadItems(); // Load items from localStorage when component initializes
       },

        saveItems: function () {
            let itemsJson = ko.toJSON(this.items());
            localStorage.setItem('productArray', itemsJson);
        },

        loadItems: function () {
            let itemsJson = localStorage.getItem('productArray');
            if (itemsJson) {
                var items = JSON.parse(itemsJson);
                this.items(items);
            }
        },

       removeProduct: function (sku) {
           this.items.remove(function(item) {
               return item.sku === sku;
           });
           this.saveItems();
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
           this.saveItems();
       }
   };
});
<!-- /end solution -->
