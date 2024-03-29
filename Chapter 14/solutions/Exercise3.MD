# Exercise 3, Chapter 14 - Solution

## Step-by-Step Guide

---
### Proceed with the step-by-step guide installation in the book chapter:

1. Install Magepack module for Magento:;
```bash
    composer require creativestyle/magesuite-magepack
```

2. Enable the module:
```bash
    php bin/magento module:enable MageSuite_Magepack
```

3. Run Setup Upgrade:
```bash
    php bin/magento setup:upgrade
```

4. Enable Magpack bundling:
```bash
    bin/magento config:set dev/js/enable_magepack_js_bundling 1
```

5. Install Magepack for node.js
```bash
    sudo npm install -g magepack
```

6. Run magepack:
```bash
     magepack generate --cms-url=https://app.packt1.test/ \
         --category-url=https://app.packt1.test/gear/bags.html \
         --product-url=https://app.packt1.test/strive-shoulder-pack.html
```