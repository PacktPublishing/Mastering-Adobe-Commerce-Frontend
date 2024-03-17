#!/bin/sh

# these files should not be run in docker container, they should be run locally after warden installation
mkdir packt1
warden env-init packt1 magento2
warden sign-certificate packt1.test

