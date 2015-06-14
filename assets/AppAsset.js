/**
 * @author <a href="http://www.affka.ru">Vladimir Kozhin</a>
 * @license MIT
 */

var fs = require('fs');
var Jii = require('jii');

/**
 * @class app.assets.AppAsset
 * @extends Jii.assets.AssetBundle
 */
var self = Jii.defineClass('app.assets.AppAsset', {

	__extends: Jii.assets.AssetBundle,

	basePath: '@webroot',
	baseUrl: '@web',

	css: [
		'css/style.less',
		'css/site.css'
	],

	js: [
		'js/main.js',
		'js/foo.js'
	],

	templates: [
		'../templates/index.html',
		'../templates/users.html'
	],

	depends: [
		//'yii\web\YiiAsset',
		//'yii\bootstrap\BootstrapAsset',
	]

});