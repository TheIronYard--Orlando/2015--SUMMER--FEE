build-lists: true

# [fit] Show me your moves!

---

# What jQuery functions allow you to fetch JSON data from a local or remote server?

* [`$.getJSON`](https://api.jquery.com/jQuery.getJSON/)
* [`$.get`](https://api.jquery.com/jQuery.get/)
* [`$.ajax`](https://api.jquery.com/jQuery.ajax/)

## What built-in browser API is slowly replacing it?

* [The Fetch API: `window.fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

# What is the return value of the `jQuery.ajax` family of methods?

* [`jQuery.Promise`](https://api.jquery.com/deferred.promise/)

---

# What methods does a standard `Promise` object provide?

* `then`
* `catch`

## What additional methods does `jQuery.Promise` provide?

---

# What types of arguments are expected by the `then` method? What would you call them?

* "fulfilled" or "done" callback (`Function`)
* "rejected" or "error" callback (`Function`)

---

# What arguments are passed to the callbacks on a `jQuery.Promise` returned by `$.ajax`?

## Fulfilled:
* `JSON` data
* `String` HTTP status
* `jqXHR` with `jQuery.Promise` interface

## Rejected:
* `jqXHR` with `jQuery.Promise` interface
* `String` error message
* `Exception` object, if applicable

---

# [fit] Discussion

## Using jQuery, how can I execute multiple XHRs and and work with the results of all of them?
