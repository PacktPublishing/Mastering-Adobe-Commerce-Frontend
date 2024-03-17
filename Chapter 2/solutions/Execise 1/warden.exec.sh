#!/bin/sh

# make sure you replace the username and password with your own credentials
composer global config http-basic.repo.magento.com <username> <password>
mv .env /tmp/.env
composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition:2.4.6-p2

# install magento
bin/magento setup:install \ 
  --backend-frontname=backend \
  --amqp-host=rabbitmq \
  --amqp-port=5672 \
  --amqp-user=guest \
  --amqp-password=guest \
  --db-host=db \
  --db-name=magento \
  --db-user=magento \
  --db-password=magento \
  --search-engine=opensearch \
  --opensearch-host=opensearch \
  --opensearch-port=9200 \
  --opensearch-index-prefix=magento2 \
  --opensearch-enable-auth=0 \
  --opensearch-timeout=15 \
  --http-cache-hosts=varnish:80 \
  --session-save=redis \
  --session-save-redis-host=redis \
  --session-save-redis-port=6379 \
  --session-save-redis-db=2 \
  --session-save-redis-max-concurrency=20 \
  --cache-backend=redis \
  --cache-backend-redis-server=redis \
  --cache-backend-redis-db=0 \
  --cache-backend-redis-port=6379 \
  --page-cache=redis \
  --page-cache-redis-server=redis \
  --page-cache-redis-db=1 \
  --page-cache-redis-port=6379

bin/magento config:set --lock-env web/unsecure/base_url "https://${TRAEFIK_SUBDOMAIN}.${TRAEFIK_DOMAIN}/"
bin/magento config:set --lock-env web/secure/base_url "https://${TRAEFIK_SUBDOMAIN}.${TRAEFIK_DOMAIN}/"
bin/magento config:set --lock-env web/secure/offloader_header X-Forwarded-Proto
bin/magento config:set --lock-env web/secure/use_in_frontend 1
bin/magento config:set --lock-env web/secure/use_in_adminhtml 1
bin/magento config:set --lock-env web/seo/use_rewrites 1
bin/magento config:set --lock-env system/full_page_cache/caching_application 2
bin/magento config:set --lock-env system/full_page_cache/ttl 604800
bin/magento config:set --lock-env catalog/search/enable_eav_indexer 1
bin/magento config:set --lock-env dev/static/sign 0
bin/magento deploy:mode:set -s developer
bin/magento cache:disable block_html full_page
bin/magento indexer:reindex
bin/magento cache:flush

mv /tmp/.env .env

php bin/magento module:disable Magento_TwoFactorAuth Magento_AdminAdobeImsTwoFactorAuth

# set developer mode
php bin/magento deploy:mode:set developer

# create admin user
php bin/magento admin:user:create

# deploy sample data
php bin/magento sampledata:deploy
php bin/magento setup:upgrade