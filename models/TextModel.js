/**
 * @class app.models.TextModel
 * @extends Jii.base.Model
 */
Jii.defineClass('app.models.TextModel', {

	__extends: Jii.base.Model,

	_attributes: {
		title: null,
		text: null
	},

	rules: function () {
		return [
			// insert
			['text', 'required', {on: 'default'}],
			// insert, update
			['text', 'string', {on: 'default', max: 10}],
			['text', 'match', {on: 'default', pattern: /^[a-z0-9]+$/i}]
		];
	}

});