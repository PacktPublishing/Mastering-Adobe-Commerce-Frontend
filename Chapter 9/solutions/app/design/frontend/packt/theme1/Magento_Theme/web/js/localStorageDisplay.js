define([
    'ko',
    'uiComponent'
], function (ko, Component) {
    'use strict';

    return Component.extend({
        defaults: {
            localStorageData: ko.observableArray([])
        },

        initialize: function () {
            this._super();
            this.loadLocalStorageData();
        },

        loadLocalStorageData: function () {
            const self = this;
            Object.keys(localStorage).forEach(function (key) {
                var value = localStorage.getItem(key);
                try {
                    self.localStorageData.push({key: key, value: JSON.parse(value)});
                } catch (e) {
                    self.localStorageData.push({key: key, value: value});
                }
            });
        }
    });
});
