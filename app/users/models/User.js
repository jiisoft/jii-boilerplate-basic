/**
 * @author Vladimir Kozhin <affka@affka.ru>
 * @license MIT
 */

'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.users.models.User
 * @extends Jii.sql.ActiveRecord
 */
Jii.defineClass('app.users.models.User', /** @lends app.users.models.User.prototype */{

    __extends: 'Jii.sql.ActiveRecord',

    __static: /** @lends app.users.models.User */{

        tableName() {
            return 'users';
        }

    },

    rules() {
        return [
            ['email', 'required'],
            [['name', 'email'], 'string', {max: 255}],
            ['email', 'email']
        ];
    },

    attributeLabels() {
        return {
            email: 'Email',
            name: 'Name'
        }
    }

});
