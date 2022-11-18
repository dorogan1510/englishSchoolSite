let mix = require('laravel-mix')

mix.js('src/index.js', './')
mix.sass('src/sass/style.scss', './').options({
    processCssUrls: false,
})

var browserSync = require('browser-sync').create()

browserSync.init({
    watch: true,
    server: '../polina-site',
})
