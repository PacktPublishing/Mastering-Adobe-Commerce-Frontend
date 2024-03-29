# Adobe Commerce Frontend Development - Chapter 7
Customizing Emails
---
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
* Please check and pay attention how changes are related to module related directories.
* Disable Client Side CSS Compilation, use server side

---
### Practical Exercises:
Practical exercises
1. Create a new email template in the Admin Panel for customer registration. Assign it in system
   configurations to be used instead of the default email.
2. In the same email template that you just created, add a new section in the email footer showing
   store opening hours (also defined in the Admin Panel)
3. Change the email header template in your theme and add social links to Facebook, YouTube,
   and LinkedIn in the top-right section of the email. Make sure the header is visible in all emails
   that are sent out from the system by using the Yireo_EmailTester module.
4. Change the email footer template and add all store information in the page footer—opening
   hours, store name, and main contact information.
5. Change the font used in all the emails to any of the Google fonts.
6. Create a custom variable in the Admin Panel and display it in a password reset email in your theme.
7. For configurable products, in the order confirmation email, change the way product options
   are rendered. You can use a table or a simple one-liner. If you operate on sample data, use order
   `0000000001` for reference.