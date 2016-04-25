module.exports = {
    application: {
        basePath: '/',
        components: {
            /**
             * @name Jii.app.comet
             * @type {Jii.comet.client.Client}
             */
            comet: {
                serverUrl: 'http://127.0.0.1:3100/stat/node-comet/0/'
            },

            /**
             * @name Jii.app.neat
             * @type {Jii.comet.client.NeatClient}
             */
            neat: {},

            /**
             * @name Jii.app.db
             * @type {Jii.sql.remote.Connection}
             */
            db: {
                route: 'site/api/ar',
                schema: {
                    className: 'Jii.sql.remote.Schema'
                }
            },

            /**
             * @name Jii.app.router
             * @type {Jii.clientRouter.Router}
             */
            clientRouter: {},

            /**
             * @name Jii.app.view
             * @type {Jii.view.ClientWebView}
             */
            view: {}
        }
    },
    context: {
        components: {
            profiles: {
                className: 'Jii.comet.client.NeatContextProfiles'
            }
        }
    }
}