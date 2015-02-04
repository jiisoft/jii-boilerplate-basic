/**
 * @author <a href="http://www.affka.ru">Vladimir Kozhin</a>
 * @license MIT
 */

var fs = require('fs');
var Jii = require('jii');

/**
 * @class app.controllers.SiteController
 * @extends Jii.base.Controller
 */
var self = Jii.defineClass('app.controllers.SiteController', {

	__extends: Jii.base.Controller,

	/**
	 *
	 * @param {Jii.base.Context} context
	 * @param {Jii.httpServer.Request} context.request
	 * @param {Jii.httpServer.Response} context.response
	 */
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
	},

	/**
	 *
	 * @param {Jii.base.Context} context
	 * @param {Jii.httpServer.Request} context.request
	 * @param {Jii.httpServer.Response} context.response
	 */
	actionUsers: function(context) {
		// Create user model for `add` form
		var userModel = new app.models.UserModel();

		// Get search query from request
		var searchQuery = context.request.get('search') || '';

		Jii.when.resolve().then(function() {
			// Save user
			if (context.request.isPost()) {
				userModel.setAttributes(context.request.post());
				return userModel.save().then(function(isSuccess) {

					console.log(userModel.hasErrors('name'));
					if (isSuccess) {
						userModel = new app.models.UserModel();
					}
				});
			}
		}).then(function() {
			// Create database query
			var query = app.models.UserModel.find().orderBy('name');

			// Append search query
			if (searchQuery) {
				query.where(['like', 'email', searchQuery]);
				query.orWhere(['like', 'name', searchQuery]);
			}

			// Do search
			return query.all()
		}).then(function(userModels) {

			// Render template
			context.response.data = Jii._.template(fs.readFileSync(__dirname + '/../templates/users.html'), {
				userModel: userModel,
				search: searchQuery,
				users: userModels
			});

			// Send response
			context.response.send();
		});

	}

});