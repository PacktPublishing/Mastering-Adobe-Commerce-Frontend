# Adobe Commerce Frontend Development - Chapter 6

This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 6 of our Frontend Development Book.

## Folder Structure
- **`code` folder:** Contains directly copyable files to your local instance, identical to the book's code examples. Remember to also copy the `dev` folder for the necessary `themes.js` file for Grunt CSS compilation.
- **`solutions` folder:** Offers solutions to Chapter 4's practical exercises. Attempt the exercises first before referring to these solutions for code validation.

## Important Notes
- **For Linux / WSL / OSX Users:** Ensure all files are synced with your `warden` environment.

## Installing a Required Module
Enable the `PacktPub_FrontendCourse` module with the following steps:
1. Copy `app/code/PacktPub` to your project's corresponding directory.
2. Enter your `warden` container: `warden shell`.
3. Enable the module: `php bin/magento mod:enable PacktPub_FrontendCourse`.
4. Clear the cache: `php bin/magento cache:flush`.

### Verification
- Confirm the module's activation in `app/etc/config.php`.

or
- Run `php bin/magento module:status` in your app container.

---
## Solutions to Practical Exercises:

All code solutions to exercises in Chapter 4 are all in `XML` files and are marked with an XML comment, like this:
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

where `XX` is the number of the exercise

### Important:
Please check and pay attention how changes are related to module related directories.


### Few notes:
* **Chapter 6** is about CSS creation, but for practical solutions we will work with `Layout XML` and `Template` files. So you might notice few less files that you have not used before, in practical solutions
* For practical solutions I've used `_extend.less` a lot. However, as you know already, this adds extra CSS content to final CSS making the file larger. For the final product, you should either use `_module.less` and create classes using BEM methodology. You can find more information about BEM here: https://getbem.com/introduction/