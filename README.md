# media-query-gap

[![Build Status][ci-img]][ci]

Apply gap on max-width/height media queries.

Useful when you want to
[prevent double breakpoints](http://tzi.fr/css/prevent-double-breakpoint).

This is a low-level module. You’re probably looking for
[PostCSS][postcss-plugin] or [Babel][babel-plugin] plugin.

## Install

```sh
npm install media-query-gap --save
```

## Usage

```js
import mediaQueryGap from 'media-query-gap';

console.log(emMediaQuery('screen and (max-width:600px)'));
// 'screen and (max-width:599px)'

console.log(emMediaQuery('screen and (max-width:37.5em)'));
// 'screen and (max-width:37.49em)'
```

## API

### mediaQueryGap(str)

Returns: `string`

#### str

Type: `string`

Media query to convert.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/media-query-gap
[ci-img]: https://travis-ci.com/niksy/media-query-gap.svg?branch=master
[postcss-plugin]: https://github.com/niksy/postcss-media-query-gap
[babel-plugin]: https://github.com/niksy/babel-plugin-media-query-gap

<!-- prettier-ignore-end -->
