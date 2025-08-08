# bank_offers
Easy management of bank offers

# Offer Clipping
Automate offer activation with browser bookmarks

## Chase
- Create Chrome bookmark
  - In Chrome, open `chrome://bookmarks/`
  - Click the three dots on the upper right corner and click `Add new bookmark`.
  - Enter a name of the bookmark, for example 'Chase Offers'.
  - Enter the whole content of 'src/offer_clipping/chase.js' to the `URL` field.
  - The bookmark only needs to be created once and can be re-used in a later date.
- Clipping the offers
  - Open Chase website in browser, log-in and navigate to offer page.
  - Find and click the bookmark just created.
  - The javascript will then automatically locate the activate all available offers on the page one by one.

