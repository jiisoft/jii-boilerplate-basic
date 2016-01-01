module.exports = {
    application: {
        components: {
            /**
             * @name Jii.app.comet
             * @type {Jii.comet.server.Server}
             */
            comet: {
                className: 'Jii.comet.server.Server',
                port: 3100,
                host: '127.0.0.1',
                transport: {
                    className: 'Jii.comet.server.transport.SockJs',
                    urlPrefix: '/stat/node-comet/[0-9]+'
                }
            },

            /**
             * @name Jii.app.neat
             * @type {Jii.comet.server.NeatServer}
             */
            neat: {
                className: 'Jii.comet.server.NeatServer',
                bindings: {
                    user: {
                        user: {
                            serverModel: 'app.users.models.User'
                        }
                    }
                }
            },

            /**
             * @name Jii.app.http
             * @type {Jii.httpServer.HttpServer}
             */
            http: {
                className: 'Jii.httpServer.HttpServer',
                port: 3000,
                staticDirs: __dirname + '/../../../web'
            }
        }
    },
    context: {
        components: {
            profiles: {
                className: 'Jii.comet.server.NeatContextProfiles'
            }
        }
    }
};