require('gulp-easy')(require('gulp'))
    .js(
        [
            './app/core/client.js',
            './app/*/client.js'
        ],
        './web/app-client.js',
        {
            jsx: true
        }
    )