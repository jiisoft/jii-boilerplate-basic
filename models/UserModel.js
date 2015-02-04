
var Jii = require('jii');

/**
 * @class app.models.UserModel
 * @extends Jii.sql.ActiveRecord
 */
Jii.defineClass('app.models.UserModel', {

	__extends: Jii.sql.ActiveRecord,

	__static: {

		tableName: function () {
			return 'users';
		}

	},

	rules: function () {
		return [
			['email', 'required'],
			[['email', 'name'], 'string', {max: 255}],
			['email', 'email']
		];
	}

});