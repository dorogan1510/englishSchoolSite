let mix = require('laravel-mix')

mix.js('src/index.js', './').sass('src/sass/style.scss', './')

var browserSync = require('browser-sync').create()

browserSync.init({
    watch: true,
    server: '../polina-site',
})
