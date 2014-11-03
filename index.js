require('jii');

require('require-all')(__dirname + '/controllers');
require('require-all')(__dirname + '/models');

Jii.createWebApplication({
	application: {
		basePath: __dirname,
		components: {
			urlManager: {
				className: 'Jii.controller.UrlManager',
				rules: {
					'': 'site/index'
				}
			},
			http: {
				className: 'Jii.controller.httpServer.HttpServer'
			}
		}
	}
});

Jii.app.http.start();
