# dtrt-string-utils

String utilities.

## Usage

```sh
npm install dotherightthing/dtrt-string-utils
```

```js
import dtrtStringUtils from 'dtrt-string-utils'; // ESM
const dtrtStringUtils = require('dtrt-string-utils'); // CommonJS

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

npm run test
```
