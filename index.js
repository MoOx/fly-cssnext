const cssnext = require("cssnext")
module.exports = function () {
  this.filter("cssnext", (data, options) => {
    const result = cssnext(data.toString(), options)
    return {
      ext: (options || {}).ext || ".css",
      css: result.css || result,
      map: result.map
    }
  })
}
