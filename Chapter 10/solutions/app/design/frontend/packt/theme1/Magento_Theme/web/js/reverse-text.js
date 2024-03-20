<!-- Solution Exercise 3, Chapter 10 -->
define(['uiComponent', 'ko'], function(Component, ko) {
    'use strict';

    return Component.extend({


        defaults: {
            inputText: ko.observable(''),
            reversedText: ko.observable('') // Now a simple observable
        },

        initialize: function () {
            this._super();
            this.inputText.subscribe(function(newValue) {
                this.reversedText(newValue.split('').reverse().join(''));
            }, this);
            return this;
        }
    });
});
<!-- /end solution -->
