define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';

    return function (jsFunction) {
        return wrapper.wrap(jsFunction, function (originalJsFunctionFunction, config, element) {
            $('#times').html('<strong> BLOCKED BY MIXIN </strong>');
        });
    };
});
