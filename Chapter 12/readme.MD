# Adobe Commerce Frontend Development - Chapter 12
Storefront-Related Configuration in the Admin Panel
---
This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 12 of our Frontend Development Book.

## Folder Structure
- **`solutions` folder:** Offers solutions to Chapter 12's practical exercises. Attempt the exercises first before referring to these solutions for code validation.

## Important Notes
- **For Linux / WSL / OSX Users:** Ensure all files are synced with your `warden` environment.

## Installing a Required Modules

Enable modules: `PacktPub_FrontendCourse`, `PacktPub_JavaScriptPlayground` with the following steps:
1. Copy `app/code/PacktPub` to your project's corresponding directory (`app/code`).
2. Enter your `warden` container: `warden shell`.
3. Enable modules, if you haven't already,: `php bin/magento mod:enable PacktPub_FrontendCourse PacktPub_JavaScriptPlayground`.
4. Run upgrade command `php bin/magento setup:upgrade`
5. Clear the cache: `php bin/magento cache:flush`.
---

### Verification
- Confirm the module's activation in `app/etc/config.php`.

or
- Run `php bin/magento module:status` in your app container.

---
## Solutions to Practical Exercises:

All code solutions to exercises in Chapter 12 are all in `XML` files and are marked with an XML comment, like this:
```xml
<!-- solution to exercise XX -->
    <layout>
        [...]
    </layout>
<!-- /end solution -->
```

for **template** files it is also an HTML comment
```html
<!-- solution to exercise XX -->
    <p>[...]</p>
<!-- /end solution -->
```

for **less** files it is also an HTML comment
```less
/* <!-- Exercise XX, Chapter 12 --> */
    body {
      [...]
    }
/* <!-- /end exercise --> */
```

for **JavaScript** files it is also an HTML comment
```less
<!-- Exercise XX, Chapter 12 -->
define([
   ...
]);
<!-- /end exercise -->
```

where `XX` is the number of the exercise

### Important:
* Please check and pay attention how changes are related to module related directories.
* Disable Client Side CSS Compilation, use server side

---
### Practical Exercises:
1. Remove product swatches on a category page that does not display filters by using layout XML.
2. Change the configurable product page to use two a column-left page layout, using a proper
   layout handle.
3. Move the category description to the bottom after the product listing.
4. Change the page title prefix and suffix.
5. Add Google Tag Manager to your theme.
6. Change the logo in transactional emails.
7. For all anchor categories, add a custom CSS file only for that category page using layout XML.
   Make the background silver for that category.