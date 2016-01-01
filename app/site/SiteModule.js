'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.site.SiteModule
 * @extends Jii.base.Module
 */
Jii.defineClass('app.site.SiteModule', /** @lends app.site.SiteModule.prototype */{

	__extends: 'Jii.base.Module',

    controllerNamespace: 'app.site.controllers',

    layout: 'app.core.layouts.LayoutView'

});