[![Build Status](https://travis-ci.org/fightforthefuture/lovescensorship.svg?branch=master)](https://travis-ci.org/fightforthefuture/lovescensorship)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fightforthefuture/lovescensorship)

This project uses [NGINX](https://www.nginx.com/) in front of [Jekyll](https://jekyllrb.com/) to serve any number of single-page static sites from one or more shared templates.

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

# Notes
- You can use a [wildcard domain](https://devcenter.heroku.com/articles/custom-domains#add-a-wildcard-domain) and tweak the NGINX configuration to serve sites on subdomains instead.
- Your Heroku app must set `NGINX_WAIT_ENABLED=0` in config variables or `bin/start-nginx` (from the NGINX Heroku buildpack) will hang waiting for `/tmp/nginx.socket` to be created.
- Heroku's official [static site buildpack](https://github.com/heroku/heroku-buildpack-static) does not offer sufficiently low-level configuration for the NGINX setup we need, and the [original NGINX buildpack](https://github.com/ryandotsmith/nginx-buildpack) is outdated and does not support the `heroku-16` stack.

# Further reading
- https://www.randomerrata.com/articles/2013/nginx-heart-middleman/
- https://github.com/agriffis/nginx-buildpack
- https://nginx.org/en/docs/http/server_names.html
- https://jekyllrb.com/docs/permalinks/
