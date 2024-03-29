# Adobe Commerce Frontend Development - Chapter 13
Working with Magento CMS
---
This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 13 of our Frontend Development Book.

## Folder Structure
- **`solutions` folder:** Offers solutions to Chapter 13's practical exercises. Attempt the exercises first before referring to these solutions for code validation.

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

All code solutions to exercises in Chapter 13 are all in `XML` files and are marked with an XML comment, like this:
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
/* <!-- Exercise XX, Chapter 13 --> */
    body {
      [...]
    }
/* <!-- /end exercise --> */
```

for **JavaScript** files it is also an HTML comment
```less
<!-- Exercise XX, Chapter 13 -->
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
1. Create two new CMS blocks with some random HTML content. Once this is done, create two
containers on a product page below the product descriptions and inject those CMS blocks into
those containers using Layout XML.
2. Remove the search block on a 404 page using Layout XML.
3. By using Widgets, place a link to an “about us” page above the page footer using Layout Update
   on the category pages without filters.
4. Create a new CMS page with three columns (use the three-column layout):
   * Place a recently viewed product list Widget in the left column.
   * Place a recently compared product list Widget in the right column.
5. By using Layout XML, add a new Product tab on a product page and place a CMS block inside
   it with a YouTube video. You will have to create a YouTube API key.
6. By using Page Builder, create a CMS page that will display a new product collection.
7. By using Layout XML, add a new CSS file on the “enable-cookies” CMS page.