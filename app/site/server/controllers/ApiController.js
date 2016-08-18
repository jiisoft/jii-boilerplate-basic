/**
 * @author <a href="http://www.affka.ru">Vladimir Kozhin</a>
 * @license MIT
 */

var Jii = require('jii');

/**
 * @class app.site.controllers.ApiController
 * @extends Jii.base.Controller
 */
Jii.defineClass('app.site.controllers.ApiController', /** @lends app.site.controllers.ApiController.prototype */{

	__extends: 'Jii.base.Controller',

    actions() {
        return {
            ar: 'Jii.sql.remote.ActiveRecordAction'
        };
    }

});