'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.users.views.users.UsersIndexView
 * @extends Jii.view.react.ReactView
 */
Jii.defineClass('app.users.views.users.UsersIndexView', /** @lends app.users.views.users.UsersIndexView.prototype */{

    __extends: Jii.view.react.ReactView,

    userFormModel: null,

    usersCollection: null,

    init: function() {
        this.__super();
        this.userFormModel = new app.users.models.User();
    },

    _onSave: function() {
        this.userFormModel.setAttributes({
            id: null,
            name: '',
            email: ''
        });
    },

    _onDelete: function(model) {
        model.delete();
    },

    render: function () {
        var self = this;

        return <div>
            <Jii.view.react.grid.GridView
                collection={this.usersCollection}
                columns={{
                    id: 'id',
                    name: {
                        attribute: 'name',
                        content: function(model) {
                            return model.get('email') + ' (' + model.get('name') + ')';
                        }
                    },
                    action: {
                        content: function(model) {
                            return <a href="javascript:void(0)" className="btn btn-xs btn-default" onClick={self._onDelete.bind(this, model)}>
                                    <span className="glyphicon glyphicon-remove" />
                                </a>;
                        }.bind(this)
                    }
                }}
            />
            <Jii.view.react.form.ActiveForm model={this.userFormModel} layout="horizontal">
                <Jii.view.react.form.Input attribute="name" />
                <Jii.view.react.form.Input attribute="email" />
                <Jii.view.react.form.Button type="submit">Send</Jii.view.react.form.Button>
            </Jii.view.react.form.ActiveForm>
        </div>;
    }

});
