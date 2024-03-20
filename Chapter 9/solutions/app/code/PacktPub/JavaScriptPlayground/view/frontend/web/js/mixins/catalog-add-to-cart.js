define([
    'jquery',
], function ($) {
    'use strict';

    return function (widget) {
        $.widget('mage.catalogAddToCart', widget, {
            ajaxSubmit: function (form) {
                const addToCartButton = $(form).find(
                    this.options.addToCartButtonSelector
                );
                $(addToCartButton).slideUp(500);
                this._super(form);
                $(addToCartButton).slideDown(500);
            }
        });

        return $.mage.catalogAddToCart;
    };
});
