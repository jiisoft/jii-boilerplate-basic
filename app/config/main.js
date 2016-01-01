module.exports = {
    application: {
        id: 'jii-boilerplate-basic',
        defaultRoute: 'site/site',
        components: {
            /**
             * @name Jii.app.urlManager
             * @type {Jii.urlManager.UrlManager}
             */
            urlManager: {
                className: 'Jii.urlManager.UrlManager',
                rules: {
                    'users': 'users/users/index'
                }
            }
        },
        modules: {
            site: {
                className: 'app.site.SiteModule'
            },
            users: {
                className: 'app.users.UsersModule'
            }
        }
    }
};