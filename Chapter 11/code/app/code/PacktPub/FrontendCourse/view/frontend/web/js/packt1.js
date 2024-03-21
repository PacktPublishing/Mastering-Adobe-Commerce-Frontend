define(['jquery'], function($) {
    return {
        doSomething: function() {
            $('body').append('<strong>HELLO</strong>');
        }
    }
});