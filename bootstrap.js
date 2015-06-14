global.Jii = require('jii');
require('jii-httpserver');
require('jii-ar-sql');
require('jii-view');
require('jii-assets');

global.app = Jii.namespace('app');
require('require-all')(__dirname + '/assets');
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
					'users': 'site/users',
					'view': 'site/view'
				}
			},
			http: {
				className: 'Jii.httpServer.HttpServer'
			},
			view: {
				className: 'Jii.view.ServerWebView'
			},
			assetManager: {
				className: 'Jii.assets.AssetManager',
				bundles: {
					'app.assets.AppAsset': {}
				}
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