define([
    'ko'
], function (ko) {
    'use strict';

    /** This is bad comment */
    return function () {
        /** test */
        self.count = ko.observable(0);

        self.increment = function () {
            self.count(self.count() + 1);
        };

        self.decrement = function () {
            self.count(self.count() - 1);
        };
    };
});
