define([
    'jquery',
    'Magento_Ui/js/modal/confirm',
    'mage/mage'
], function ($, confirm) {
    'use strict';

    return function (config) {
        let dataForm = $('#' + config.formId);

        $('#send2').on('click', function(event) {
            event.preventDefault();
            let dataForm = $('#' + config.formId);

            if ($('#login-form').valid()) {
                confirm({
                    title: 'Accept user',
                    content: $('#customer-popup').html(),
                    actions: {
                        confirm: function () {
                            $(dataForm).submit();
                        },

                        cancel: function () {
                            return false;
                        }
                    }
                });
            }
        });

        dataForm.on('submit', function () {
            $(this).find(':submit').attr('disabled', 'disabled');

            if (this.isValid === false) {
                $(this).find(':submit').prop('disabled', false);
            }
            this.isValid = true;
        });

        dataForm.on('invalid-form.validate', function () {
            $(this).find(':submit').prop('disabled', false);
            this.isValid = false;
        });
    };
});
