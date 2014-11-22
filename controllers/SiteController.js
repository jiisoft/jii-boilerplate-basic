/**
 * @author <a href="http://www.affka.ru">Vladimir Kozhin</a>
 * @license MIT
 */

var fs = require('fs');

/**
 * @class app.controllers.SiteController
 * @extends Jii.base.Controller
 */
var self = Jii.defineClass('app.controllers.SiteController', {

	__extends: Jii.base.Controller,

	actionIndex: function(context) {
		var model = new app.models.TextModel();
		var indexTemplate = fs.readFileSync(__dirname + '/../templates/index.html');

		model.setAttributes(context.request.get());

		model.validate().then(function(success) {
			context.response.data = Jii._.template(indexTemplate, model.getAttributes());

			if (success) {
				context.response.data += 'You text: ' + model.get('text');
			} else {
				context.response.data += 'Error: ' + model.getErrors('text').join();
			}

			context.response.send();
		});
	}

});