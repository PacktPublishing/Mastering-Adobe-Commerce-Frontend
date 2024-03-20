/** <!-- Exercise 5 Solution, Chapter 9 --> */
define([
    'jquery',
    'Magento_Ui/js/modal/confirm',
], function ($, confirmation) {
    'use strict';

    return function () {
        $('a.action-delete').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            let
                link = $(this),
                url = $(this).attr('href'),
                postData = JSON.parse(link.attr('data-post').replace(/&quot;/g, '\"'));

            confirmation({
                title: 'Confirm Removal',
                content: 'Are you sure you want to remove this item from your cart?',
                actions: {
                    confirm: function () {
                        let
                            postUrl = postData.action,
                            postDataObject = postData.data;

                        postData.data.form_key = $('input[name="form_key"]').val();

                        $.ajax({
                            url: postUrl,
                            type: 'POST',
                            data: postDataObject,
                            showLoader: true,
                            success: function (response) {
                                location.reload();
                            },
                            error: function (xhr, status, error) {
                                console.error('Error removing item', error);
                            }
                        });
                    },

                    cancel: function () {
                        link.attr('href', url);
                    },

                    always: function () {

                    }
                }
            });
        });
    }
});
<!-- /end solution -->
