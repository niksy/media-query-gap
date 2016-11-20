# media-query-gap

[![Build Status][ci-img]][ci]

Apply gap on max-width/height media queries.

Useful when you want to [prevent double breakpoints](http://tzi.fr/css/prevent-double-breakpoint).

This is a low-level module. You’re probably looking for [PostCSS][postcss-plugin] or [Babel][babel-plugin] plugin.

## Install

```sh
npm install media-query-gap --save
```

## Usage

```js
const mediaQueryGap = require('media-query-gap');

console.log(emMediaQuery('screen and (max-width:600px)'));
// 'screen and (max-width:599px)'

console.log(emMediaQuery('screen and (max-width:37.5em)'));
// 'screen and (max-width:37.49em)'
```

## API

### mediaQueryGap(str)

Returns: `String`

#### str

Type: `String`

Media query to convert.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/media-query-gap
[ci-img]: https://img.shields.io/travis/niksy/media-query-gap.svg
[postcss-plugin]: https://github.com/niksy/postcss-media-query-gap
[babel-plugin]: https://github.com/niksy/babel-plugin-media-query-gap
