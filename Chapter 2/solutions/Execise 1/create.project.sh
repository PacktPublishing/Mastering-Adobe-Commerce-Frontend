#!/bin/sh

# these files should NOT be run in docker container, they should be run locally
mkdir packt2
warden env-init packt2 magento2
warden sign-certificate packt2.test

