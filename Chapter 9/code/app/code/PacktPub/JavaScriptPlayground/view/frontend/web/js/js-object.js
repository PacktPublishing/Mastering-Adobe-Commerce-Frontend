define([
    'jquery', 'PacktPub_JavaScriptPlayground/js/js-function'
], function($, jsFunction) {
    'use strict';

    return {
        customValue: null,

        setCustomValue: function (customValue) {
            jsFunction({}, null);
            this.customValue  = customValue;
        },

        getCustomValue: function () {
            return this.customValue
        }
    }
});