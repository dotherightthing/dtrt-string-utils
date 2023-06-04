# dtrt-string-utils

String utilities.

## Usage

```sh
npm install dotherightthing/dtrt-string-utils
```

```js
import {
  getIndefiniteArticle,
  stringToCapitalised,
  stringToId,
} from 'dtrt-string-utils';

// Get the appropriate indefinite article for the specified string
const appleArt = getIndefiniteArticle('apple'); // an
const busArt = getIndefiniteArticle('bus'); // a

// Capitalise a string
const appleCap = stringToCapitalised('apple'); // Apple

// Convert a string into a form safe for use as an HTML id attribute
const id = stringToId('file A.js,"file B.txt'); // file-a-js-file-b-txt
```

## Tests

```sh
npm run lint

npm run test
```
