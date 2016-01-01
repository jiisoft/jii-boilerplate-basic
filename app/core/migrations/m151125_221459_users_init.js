'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.core.migrations.m151125_221459_users_init
 * @extends Jii.sql.Migration
 */
Jii.defineClass('app.core.migrations.m151125_221459_users_init', /** @lends app.core.migrations.m151125_221459_users_init.prototype */{

    __extends: Jii.sql.Migration,

    up: function() {
        this.createTable('users', {
            id: this.primaryKey(),
            email: this.string(),
            name: this.string(),
            createTime: this.dateTime()
        });
    },

    down: function() {
        this.dropTable('users');
    }

});
