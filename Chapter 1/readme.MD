# Adobe Commerce Frontend Development - Chapter 1
Setting Up the Local Environment
---
This folder does not contain any code examples from the book, or solutions to practical exercises as there are none in the Chapter 1.

The structure of the folder is following:
* `code` contains executable files and code samples from **Chapter 1**

---
What can be found here is:
* warden OSX installation script
* LINUX (for WSL as wll) warden installation script

---
## Installing on Linux / WSL

copy the file `warden.install.sh` to:
* user home folder 
* double check if you have `sudo` access

After copying the file:
```shell
chmod +x warden.install.sh
./warden.install.sh
```

* the first command makes the file executable
* the second command will install warden in your Linux / WSL machine

---
## Install on OSX:

JUst run following commands on your local machine
```shell
brew install wardenenv/warden/warden
warden svc up
```