define(['uiComponent'], function(Component) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this.testFunction();
        },

        testFunction: function () {
            console.error('test 001');
        }
    });
});