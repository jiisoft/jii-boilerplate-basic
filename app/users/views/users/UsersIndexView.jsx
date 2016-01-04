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
            <Jii.view.react.form.ActiveForm model={this.userFormModel} onSave={this._onSave.bind(this)}>
                <Jii.view.react.form.Input model={this.userFormModel} name="name" />
                <Jii.view.react.form.Input model={this.userFormModel} name="email" />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Send</button>
                    </div>
                </div>
            </Jii.view.react.form.ActiveForm>
        </div>;
    }

});
