global.Jii = require('jii');
require('jii-httpserver');
require('jii-ar-sql');

global.app = Jii.namespace('app');
require('require-all')(__dirname + '/controllers');
require('require-all')(__dirname + '/models');

Jii.createWebApplication({
	application: {
		basePath: __dirname,
		components: {
			urlManager: {
				className: 'Jii.urlManager.UrlManager',
				rules: {
					'': 'site/index',
					'users': 'site/users'
				}
			},
			http: {
				className: 'Jii.httpServer.HttpServer'
			},
			db: {
				className: 'Jii.sql.mysql.Connection',
				database: 'jii-my-app',
				username: 'jii-my-app',
				password: ''
			}
		}
	}
});

Jii.app.db.open();
Jii.app.http.start();
