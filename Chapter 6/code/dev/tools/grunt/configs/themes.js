/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    luma: {
        area: 'frontend',
        name: 'Magento/luma',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },

    packt1_en_US: {
        area: 'frontend',
        name: 'packt/theme1',
        locale: 'en_US',
        files: [
            'css/bespoke-awesome',
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },

    packt1_fi_FI: {
        area: 'frontend',
        name: 'packt/theme1',
        locale: 'fi_FI',
        files: [
            'css/bespoke-awesome',
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },

    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_US',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    }
};
