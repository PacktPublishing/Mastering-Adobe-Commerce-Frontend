# Exercise 2, Chapter 14 - Solution

## Step-by-Step Guide

---
1. Log to Application container by typing `warden shell` in your Magento directory
2. Enable bundling and minification:

For **CSS**:
```bash 
    bin/magento config:set dev/css/minify_files 1
    bin/magento config:set dev/css/merge_css_files 1
```

For **JS**:
```bash
    bin/magento config:set dev/js/enable_js_bundling 1
    bin/magento config:set dev/js/minify_files 1
    bin/magento config:set dev/js/merge_files 1
```

3. Run Production Mode

```bash
    php bin/magento  deploy:mode:set production
```

---