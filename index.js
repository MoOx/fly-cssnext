module.exports = function () {
  this.filter("cssnext", (source, options) => {
    try {
      return require("cssnext")(source, options)
     } catch (e) { throw e }
  })
}
