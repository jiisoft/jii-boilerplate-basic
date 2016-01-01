module.exports = {
    application: {
        basePath: '/',
        components: {
            /**
             * @name Jii.app.comet
             * @type {Jii.comet.client.Client}
             */
            comet: {
                className: 'Jii.comet.client.Client',
                serverUrl: 'http://127.0.0.1:3100/stat/node-comet/0/'
            },

            /**
             * @name Jii.app.neat
             * @type {Jii.comet.client.NeatClient}
             */
            neat: {
                className: 'Jii.comet.client.NeatClient',
                engine: {
                    className: 'NeatComet.NeatCometClient'
                }
            },

            /**
             * @name Jii.app.db
             * @type {Jii.sql.remote.Connection}
             */
            db: {
                className: 'Jii.sql.remote.Connection',
                route: 'site/api/ar',
                schema: {
                    className: 'Jii.sql.remote.Schema'
                }
            },

            /**
             * @name Jii.app.router
             * @type {Jii.clientRouter.Router}
             */
            router: {
                className: 'Jii.clientRouter.Router'
            },

            /**
             * @name Jii.app.view
             * @type {Jii.view.ClientWebView}
             */
            view: {
                className: 'Jii.view.ClientWebView'
            }
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