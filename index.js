global.Jii = require('jii');
require('jii-httpserver');
require('jii-model');

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
					'': 'site/index'
				}
			},
			http: {
				className: 'Jii.httpServer.HttpServer'
			}
		}
	}
});

Jii.app.http.start();
