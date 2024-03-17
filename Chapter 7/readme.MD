# Adobe Commerce Frontend Development - Chapter 7

This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 7 of our Frontend Development Book.

## Folder Structure
- **`code` folder:** Contains directly copyable files to your local instance, identical to the book's code examples. Remember to also copy the `dev` folder for the necessary `themes.js` file for Grunt CSS compilation.
- **`solutions` folder:** Offers solutions to Chapter 7's practical exercises. Attempt the exercises first before referring to these solutions for code validation.

## Important Notes
- **For Linux / WSL / OSX Users:** Ensure all files are synced with your `warden` environment.

## Installing a Required Modules

Enable the `PacktPub_FrontendCourse` module with the following steps:
1. Copy `app/code/PacktPub` to your project's corresponding directory.
2. Enter your `warden` container: `warden shell`.
3. Enable the module, if you haven't already,: `php bin/magento mod:enable PacktPub_FrontendCourse`.
4. Make sure you installed `email tester module` from Yireo: \
```bash
composer require yireo/magento2-emailtester2
```
5. Run upgrade command `php bin/magento setup:upgrade`
6. Clear the cache: `php bin/magento cache:flush`.
---

### Verification
- Confirm the module's activation in `app/etc/config.php`.

or
- Run `php bin/magento module:status` in your app container.

---
## Solutions to Practical Exercises:

All code solutions to exercises in Chapter 7 are all in `XML` files and are marked with an XML comment, like this:
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
/* <!-- Exercise XX, Chapter 7 --> */
    body {
      [...]
    }
/* <!-- /end exercise --> */
```

where `XX` is the number of the exercise

### Important:
Please check and pay attention how changes are related to module related directories.