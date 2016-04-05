module.exports = {
    application: {
        basePath: __dirname + '/../..',
        components: {
            /**
             * @name Jii.app.db
             * @type {Jii.sql.mysql.Connection}
             */
            db: {
                className: 'Jii.sql.mysql.Connection',
                database: 'jii-boilerplate-basic',
                username: 'root',
                password: ''
            },

            /**
             * @name Jii.app.view
             * @type {Jii.view.ServerWebView}
             */
            view: {}
        }
    }
};