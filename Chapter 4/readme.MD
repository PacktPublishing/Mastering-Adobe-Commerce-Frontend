# Adobe Commerce Frontend Development - Chapter 4
The Layout System
---
This folder contains all scripts, code, and solutions for the practical exercises described in Chapter 4 of our Frontend Development Book.

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

## Layout XML Examples
Find practical Layout XML usage examples within the `code/app/design` folder, showcasing 2 themes as discussed in Chapter 4.

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
where `XX` is the number of the exercise

### Important:
Please check and pay attention how changes are related to module related directories.

---
### Practical Exercises:
1. Add a new link to the page header that will lead to `https://app.packt1.test/packtpub`.
   Use `link.phtml` inside the `PacktPub_FrontendCourse` module file as a template
   you will pass into the block.
2. In your theme, change the page layout to a `three-column` layout.
3. Move the `columns-same-size` container into the `main` container of the layout.
4. Move all the elements from the left column to the right column at https://app.packt1.test/packtpub but do this in the reverse order by using the before and after attributes
   associated with the `<move>` **layout XML** instruction.
5. Add a page title to the page by using the `<head>` and `<title>` nodes.
6. Use a <head> block and change the robots’ meta tag to `NOROBOTS, NOINDEX` on this
   dedicated page.
7. Add an extra CSS class to the `<main>` tag on a product page.
8. Add a new CSS class to the `<body>` tag.
9. Remove the newsletter subscription on the shopping cart page.
10. Move the discount block below the shopping cart page to the right column, below the cart summary.
11. On the customer login page, make the following changes:
    1. Remove the page title.
    2. Remove all customized blocks we’ve added so far.
    3. Change the page layout to `2columns-same-size`.
    4. Place the login form in the left column.
    5. Move the registration link below it.
    6. In the right column of the registration page, copy the content from the left column located at https://app.packt1.test/packtpub.
    7. Think about whether you can use layout handles so that you don’t duplicate the XML code.
12. Add a custom CSS file to the customer registration page at https://app.packt1.test/
    packtpub and change the body’s background to yellow. Try to create a LESS file that will be
    compiled into a CSS file.