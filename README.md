# cookiekillplus

Cookiekill+ helps you reset any site to a clean slate, instantly — and could give you back gigabytes of disk space.

We all know that websites use cookies to store information about you — your account information, what's in your shopping cart, your past browsing behavior, and so on. Many of us have gotten used to clearing the cookies belonging to a particular website in our browser.

But cookies aren't the only place where a website can store this sort of information. Modern websites can also deposit your user data in localStorage, sessionStorage, and IndexedDB databases — all forms of local storage within browsers that can be used to track your behavior.

And unlike cookies, which are tiny — Chrome limits them to 4 KB — these other types of storage can grow truly massive, easily eating up multiple gigabytes of disk space within a short span of time.

When you click Cookiekill+ while visiting a website, it:

	•	Deletes all cookies for the current domain, including any subdomains
	•	Deletes all localStorage and sessionStorage for that domain
	•	Deletes all IndexedDB databases for that domain
	•	Reloads the page with a fresh cache-busting query string, forcing it to load a fresh copy of the page

In effect, when that page reloads, it will be as if it was the first time you've ever visited it in that browser — without whatever baggage you've accumulated.

Use it when you want to:

	•	Get a fresh start on a site that’s acting up — buttons not working, layouts looking screwy
	•	Make a site forget your old username or other personal information it tracks
	•	Do a quick privacy reset before sharing your screen or device
	•	Debug a website you're building or working on
	•	Break out of some site's A/B interface test
	•	Clear your data off of a public machine you used temporarily
	•	Reclaim some precious disk space

Normally, these types of data can only be cleared manually, deep in Chrome's settings or in DevTools. For most use cases, Cookiekill+ will give you a full in-browser reset.

Cookiekill+ runs entirely in your browser and makes no calls to any server anywhere. No data is ever collected or sent to anyone. 

Finally, a couple caveats:

	•	Deleting IndexedDB databases is only supported in browsers that allow JavaScript to do so. Luckily, that includes all recent versions of Chrome, Edge, Brave, Vivaldi, Opera, and other Chromium-based browsers. (Safari and Firefox don't allow deletion.)
	•	There are three kinds of browser storage that browsers won't allow Cookiekill+ to delete. These are: cross-origin cookies and storage (e.g. the data in an iframe embedded from one site into another); service workers (background scripts that can only be deleted by the sites that registered them), and HttpOnly cookies (which browsers make inaccessible to JavaScript for security reasons)
