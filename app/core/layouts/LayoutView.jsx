'use strict';

/**
 * @namespace Jii
 * @ignore
 */
var Jii = require('jii');

/**
 * @class app.core.layouts.LayoutView
 * @extends Jii.view.react.LayoutView
 */
Jii.defineClass('app.core.layouts.LayoutView', /** @lends app.core.layouts.LayoutView.prototype */{

    __extends: Jii.view.react.LayoutView,

    init: function() {
        this.__super();

        Jii.app.view.registerCssFile('bootstrap/css/bootstrap.css');
        Jii.app.view.registerJsFile('jquery.js');
        Jii.app.view.registerJsFile('bootstrap/js/bootstrap.js');
        Jii.app.view.registerJsFile('app-client.js');

        if (Jii.isNode) {
            // @todo Move to only-server place?
            Jii.app.view.registerJs('JII_CONFIG = ' + Jii._s.trim(JSON.stringify(this._getClientConfig()), '"') + ';', Jii.view.WebView.POS_END);
            Jii.app.view.registerJs('Jii.createWebApplication(JII_CONFIG).start();', Jii.view.WebView.POS_LOAD);
        }

    },

    render: function () {
        return <div>
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">{Jii.app.name}</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/users">Users</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                {this.state.content}
            </div>
            <footer className="footer">
                <div className="container">
                    <p className="pull-left">&copy; My Company</p>
                    <p className="pull-right">Jii</p>
                </div>
            </footer>
        </div>;
    },

    _getClientConfig: function() {
        return Jii.mergeConfigs(
            require('../../../app/config/main'),
            require('../../../app/config/client/main'),
            {
                application: {
                    components: {
                        db: {
                            schema: {
                                tables: Jii.app.db.getModelSchemaJson([
                                    'users'
                                ])
                            }
                        },
                        neat: {
                            bindings: Jii.app.neat.bindings // @todo use getClientBindings()
                        }
                    }
                },
                context: {
                    components: {
                        profiles: {
                            data: this.context.profiles.data
                        }
                    }
                }
            }
        );
    }

});
