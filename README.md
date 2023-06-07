# dtrt-string-utils

String utilities.

## Usage

```sh
npm install dotherightthing/dtrt-string-utils
```

### CommonJS (via Conditional Export)

```js
// script.cjs

const dtrtStringUtils = require('dtrt-string-utils');
```

### ESM (via Conditional Export)

```js
// script.mjs

import dtrtStringUtils from 'dtrt-string-utils';
```

### ESM + Browser

```html
<!-- page.html -->

<!-- use import-maps to aid module resolution of bare import specifiers -->
<script type="importmap">
  {
    "imports": {
      "dtrt-string-utils": "./node_modules/dtrt-string-utils/dist/dtrt-string-utils.mjs"
    }
  }
</script>
<script src="/script.mjs" type="module"></script>
```

### Methods

```js
// script.cjs/.mjs

// Get the appropriate indefinite article for the specified string
const appleArt = dtrtStringUtils.getIndefiniteArticle('apple'); // an
const busArt = dtrtStringUtils.getIndefiniteArticle('bus'); // a

// Capitalise a string
const appleCap = dtrtStringUtils.stringToCapitalised('apple'); // Apple

// Convert a string into a form safe for use as an HTML id attribute
const id = dtrtStringUtils.stringToId('file A.js,"file B.txt'); // file-a-js-file-b-txt
```

## Tests

```sh
npm run lint
```

```sh
npm run test
```

## References

* [Conditional exports](https://nodejs.org/api/packages.html#conditional-exports)
* [import-maps](https://blog.logrocket.com/es-modules-in-browsers-with-import-maps/)
