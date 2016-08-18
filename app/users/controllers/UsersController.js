/**
 * @author <a href="http://www.affka.ru">Vladimir Kozhin</a>
 * @license MIT
 */

var Jii = require('jii');

/**
 * @class app.users.controllers.UsersController
 * @extends Jii.base.Controller
 */
Jii.defineClass('app.users.controllers.UsersController', /** @lends app.users.controllers.UsersController.prototype */{

	__extends: 'Jii.base.Controller',

	/**
	 *
	 * @param {Jii.base.Context} context
	 * @param {Jii.httpServer.Request} context.request
	 * @param {Jii.httpServer.Response} context.response
	 * @param {Jii.comet.client.NeatContextProfiles} context.profiles
	 */
	actionIndex(context) {
        return Promise.resolve().then(() => {

            return context.profiles.getCollection('user', 'user');
        }).then(collection => {

            return this.render(app.users.views.users.UsersIndexView, context, {
                usersCollection: collection
            });
        });
	}

});