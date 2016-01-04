# DEPRECATED. Use fly-postcss instead.

---

<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [cssnext](https://github.com/cssnext/cssnext) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [cssnext documentation](https://github.com/cssnext/cssnext) to see the available options.

### Install

```a
npm install -D fly-cssnext
```

### Example

```js
export default function* () {
  yield this
    .source("*.css")
    .cssnext()
    .target("dist")
}
```

# License

[MIT][mit] © [The Fly Team][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/flyjs
[contributors]: https://github.com/cssnext/fly-cssnext/graphs/contributors
[releases]:     https://github.com/cssnext/fly-cssnext/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-cssnext
[npm-ver-link]: https://img.shields.io/npm/v/fly-cssnext.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-cssnext.svg?style=flat-square
[travis-link]:  https://travis-ci.org/cssnext/fly-cssnext
[travis-badge]: http://img.shields.io/travis/cssnext/fly-cssnext.svg?style=flat-square
