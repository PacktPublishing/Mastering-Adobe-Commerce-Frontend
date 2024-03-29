# Adobe Commerce Frontend Development - Chapter 9
RequireJS and jQuery
---
This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 9 of our Frontend Development Book.

## Folder Structure
- **`code` folder:** Contains directly copyable files to your local instance, identical to the book's code examples. Remember to also copy the `dev` folder for the necessary `themes.js` file for Grunt CSS compilation.
- **`solutions` folder:** Offers solutions to Chapter 9's practical exercises. Attempt the exercises first before referring to these solutions for code validation.

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

All code solutions to exercises in Chapter 9 are all in `XML` files and are marked with an XML comment, like this:
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
/* <!-- Exercise XX, Chapter 9 --> */
    body {
      [...]
    }
/* <!-- /end exercise --> */
```

for **JavaScript** files it is also an HTML comment
```less
<!-- Exercise XX, Chapter 9 -->
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
###  Practical Exercises:
1. Change the way `confetti.js` was added to the project via declarative notation. Then, modify
a template file to ensure that the confetti is triggered and set up using the `data-mage-init`
HTML tag attribute within the cart summary.
2. Implement an Exit Popup `jQuery` plugin for your packt2 theme on the cart page and show it
   only if the quote in the shopping cart is lower than $200 and the customer is logged out. Feel
   free to add any random content to it. Make sure you add the CSS into proper LESS files. Use
   declarative notation.
3. On the Customer Login page, hook into the login action and show a modal window with an
   OK button that the user needs to click to log in to the system. If the modal window is closed,
   nothing should happen.
4. Make sure you have installed the necessary training modules from this book’s `GitHub` repository
   and that the `PacktPub_JavaScriptPlayGround` module is enabled. Once you’ve done
   this, do the following at https://app.packt1.test/jsplayground:
   * Create a widget that will display the entire content of the local storage in a table by using a
      key in the first column and a value in the second column
5. On the cart page, show a confirm window if a user wants to delete a single item from the
   shopping cart.