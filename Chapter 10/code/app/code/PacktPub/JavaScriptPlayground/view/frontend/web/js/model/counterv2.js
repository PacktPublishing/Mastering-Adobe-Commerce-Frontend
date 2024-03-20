define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';
    let count = ko.observable(0);

    return Component.extend({
        count: count,
        template: 'PacktPub_JavaScriptPlayground/view/counter',

        increment: function () {
            this.count(this.count() + 1);
        },

        decrement: function () {
            this.count(this.count() - 1);
        }
    });
});