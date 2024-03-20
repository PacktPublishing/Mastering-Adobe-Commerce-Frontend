define([
    'mage/utils/wrapper',
    'PacktPub_JavaScriptPlayground/js/js-function'
], function (wrapper, jsFunction) {
    'use strict';

    return function (jsObject) {
        jsObject.setCustomValue = wrapper.wrapSuper(jsObject.setCustomValue, function (customValue) {
            this._super('mixin! ' + customValue);
        });

        return stepNavigator;
    };
});