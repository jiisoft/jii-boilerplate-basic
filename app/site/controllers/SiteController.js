'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.site.controllers.SiteController
 * @extends Jii.base.Controller
 */
Jii.defineClass('app.site.controllers.SiteController', /** @lends app.site.controllers.SiteController.prototype */{

	__extends: 'Jii.base.Controller',

	/**
	 *
	 * @param {Jii.base.Context} context
	 * @param {Jii.httpServer.Request} context.request
	 * @param {Jii.httpServer.Response} context.response
	 * @param {Jii.comet.INeatContextProfiles} context.profiles
	 */
	actionIndex: function(context) {
        return this.render(app.site.views.site.SiteIndexView, context);
	}

});