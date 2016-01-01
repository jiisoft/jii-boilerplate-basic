require('gulp-easy')(require('gulp'))
    .js(
        [
            './app/core/client.js',
            './app/*/client.js'
        ],
        './web/app-client.js',
        {
            transforms: [
                function() {
                    return require('babelify').configure({
                        presets: [
                            require('babel-preset-react')
                        ]
                    })
                }
            ]
        }
    )