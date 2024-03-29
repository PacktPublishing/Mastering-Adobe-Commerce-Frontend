# Adobe Commerce Frontend Development - Chapter 10
Knockout.js and UI Components
---
This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 10 of our Frontend Development Book.

## Folder Structure
- **`code` folder:** Contains directly copyable files to your local instance, identical to the book's code examples. Remember to also copy the `dev` folder for the necessary `themes.js` file for Grunt CSS compilation.
- **`solutions` folder:** Offers solutions to Chapter 10's practical exercises. Attempt the exercises first before referring to these solutions for code validation.

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

All code solutions to exercises in Chapter 10 are all in `XML` files and are marked with an XML comment, like this:
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
/* <!-- Exercise XX, Chapter 10 --> */
    body {
      [...]
    }
/* <!-- /end exercise --> */
```

for **JavaScript** files it is also an HTML comment
```less
<!-- Exercise XX, Chapter 10 -->
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
1. Add local storage to retrieve and store the products added and removed in our product calculator
example from this chapter.
2. Overwrite a template used for shipping method rendering in the checkout process in your local
   theme. Do it via the checkout page configuration handle.
3. Completing the following basic Knockout.js practice tasks:
   * On any given page, add a template with an input field.
   * Bind the text to the Knockout.js observable.
   * As the user enters data into the input field, show the reverse of that text below the field.
4. **Dynamic UI component**, quick view: On a product listing page, add a button titled Quick View
   that will open a popup/modal window that will display the product name and the product price
   loaded from the selected product grid item.