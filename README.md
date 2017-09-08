[![Build Status](https://travis-ci.com/fightforthefuture/lovescensorship.svg?token=Phdq58g7NsfstW6gyeYW&branch=master)](https://travis-ci.com/fightforthefuture/lovescensorship)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fightforthefuture/lovescensorship)

This project uses [NGINX](https://www.nginx.com/) in front of [Jekyll](https://jekyllrb.com/) to serve any number of single-page static sites (with content configurable in [Markdown](https://daringfireball.net/projects/markdown/syntax)) from one or more shared templates.

# Adding new sites

- Create a new file in `_posts/` following the `0001-01-01-{DOMAIN}.md` pattern on a new `git` branch, then open a pull request.
- Wait a few moments for Travis CI to run. If an error is displayed, the Jekyll build likely failed - click the Travis link in the pull request for more details.
- If review apps are enabled for a Heroku Pipeline connected to this repository, a temporary app will be created so you can preview the content of your pull request. Your site should be visible by appending `{DOMAIN}` to the `View deployment` link in the pull request like `https://{REVIEW_APP}.herokuapp.com/{DOMAIN}`.
- If you're configuring a new domain name instead of a subdomain, follow [the steps below](#adding-new-domain-names).
- When everything looks good, merge the pull request, and your changes should be deployed automatically!

# Adding new domain names

- In the Heroku dashboard, navigate to this app, open the `Settings` tab add two new custom domains under `Domains and certificates` - the naked apex domain like `example.com` and `www.example.com`. NGINX will 301 redirect all traffic to HTTPS and the naked apex domain. Note that Heroku's automatically managed SSL certificates won't work with CloudFlare](https://kb.heroku.com/how-can-i-use-automated-certificate-management-with-cloudflare).
- In your DNS provider, create a `CNAME` record for the apex domain and `www` subdomain and point each at the respective `DNS Target` shown in Heroku.

# Notes
- You can use a [wildcard domain](https://devcenter.heroku.com/articles/custom-domains#add-a-wildcard-domain) and tweak the NGINX configuration to serve sites on subdomains instead.
- Your Heroku app must set `NGINX_WAIT_ENABLED=0` in config variables or `bin/start-nginx` (from the NGINX Heroku buildpack) will hang waiting for `/tmp/nginx.socket` to be created.
- Heroku's official [static site buildpack](https://github.com/heroku/heroku-buildpack-static) does not offer sufficiently low-level configuration for the NGINX setup we need, and the [original NGINX buildpack](https://github.com/ryandotsmith/nginx-buildpack) is outdated and does not support the `heroku-16` stack.

# Further reading
- https://www.randomerrata.com/articles/2013/nginx-heart-middleman/
- https://github.com/agriffis/nginx-buildpack
- https://nginx.org/en/docs/http/server_names.html
- https://jekyllrb.com/docs/permalinks/
