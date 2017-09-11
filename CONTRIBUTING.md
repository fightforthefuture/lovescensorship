**PLEASE** open a pull request for any changes, and wait a few moments for Travis CI to run. If an error is displayed, the Jekyll build likely failed - click the Travis link in the pull request for more details.

If review apps are enabled for a Heroku Pipeline connected to this repository, a temporary app will be created so you can preview the content of your pull request. Your site should be visible by appending `{DOMAIN}` to the `View deployment` link in the pull request like `https://{REVIEW_APP}.herokuapp.com/{DOMAIN}`.

# Adding new sites

- Create a new file in `_posts/` following the `0001-01-01-{DOMAIN}.md` pattern on a new `git` branch, then open a pull request.
- If you're configuring a new domain name instead of a subdomain, follow [the steps below](#adding-new-domain-names).
- When everything looks good, merge the pull request, and your changes should be deployed automatically!

# Adding new domain names

- In the Heroku dashboard, navigate to this app, open the `Settings` tab add two new custom domains under `Domains and certificates` - the naked apex domain like `example.com` and `www.example.com`. NGINX will 301 redirect all traffic to HTTPS and the naked apex domain. Note that Heroku's automatically managed SSL certificates [won't work with CloudFlare](https://kb.heroku.com/how-can-i-use-automated-certificate-management-with-cloudflare).
- In your DNS provider, create a `CNAME` record for the apex domain and `www` subdomain and point each at the respective `DNS Target` shown in Heroku.

