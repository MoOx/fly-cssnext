module.exports = function () {
  this.filter("cssnext", (data, options) => {
    return require("cssnext")(data.toString(), options)
  })
}
