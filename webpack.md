plugins: [
function () {
this.plugin('done', function (stats) {
if (stats.compilation.errors && stats.compilation.errors.length) {
console.log(stats.compilation.errors[0].error);
process.exit(1);
}
});
}
]
