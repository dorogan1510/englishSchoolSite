let mix = require('laravel-mix')

mix.js('src/js/index.js', 'public/js')

mix.sass('src/sass/style.scss', 'src/css').options({
    processCssUrls: false,
})

var browserSync = require('browser-sync').create()

browserSync.init({
    watch: true,
    server: '../polina-site',
})
