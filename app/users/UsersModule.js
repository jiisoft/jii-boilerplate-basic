'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.users.UsersModule
 * @extends Jii.base.Module
 */
Jii.defineClass('app.users.UsersModule', /** @lends app.users.UsersModule.prototype */{

	__extends: 'Jii.base.Module',

    controllerNamespace: 'app.users.controllers',

    layout: 'app.core.layouts.LayoutView'

});