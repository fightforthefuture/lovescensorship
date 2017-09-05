[![Build Status](https://travis-ci.com/fightforthefuture/marshawantscensorship.svg?token=Phdq58g7NsfstW6gyeYW&branch=master)](https://travis-ci.com/fightforthefuture/marshawantscensorship)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fightforthefuture/marshawantscensorship)

This project uses [NGINX](https://www.nginx.com/) in front of [Jekyll](https://jekyllrb.com/) to serve any number of single-page static sites (with content configurable in [Markdown](https://daringfireball.net/projects/markdown/syntax)) from one or more shared templates.

# Adding new sites

- In the Heroku dashboard, navigate to this app, open the `Settings` tab add a new custom domain under `Domains and certificates`.
- In your DNS provider, create a `CNAME` record for this domain and point it at the `DNS Target` shown in Heroku.
- Create a new file in `_posts/` following the `0001-01-01-{DOMAIN}.md` pattern, then commit and push to GitHub which should automatically deploy to the Heroku app.

# Notes
- You can use a [wildcard domain](https://devcenter.heroku.com/articles/custom-domains#add-a-wildcard-domain) and tweak the NGINX configuration to serve sites on subdomains instead.
- Your Heroku app must set `NGINX_WAIT_ENABLED=0` in config variables or `bin/start-nginx` (from the NGINX Heroku buildpack) will hang waiting for `/tmp/nginx.socket` to be created.
- Heroku's official [static site buildpack](https://github.com/heroku/heroku-buildpack-static) does not offer sufficiently low-level configuration for the NGINX setup we need, and the [original NGINX buildpack](https://github.com/ryandotsmith/nginx-buildpack) is outdated and does not support the `heroku-16` stack.

# Further reading
- https://www.randomerrata.com/articles/2013/nginx-heart-middleman/
- https://github.com/agriffis/nginx-buildpack
- https://nginx.org/en/docs/http/server_names.html
- https://jekyllrb.com/docs/permalinks/
