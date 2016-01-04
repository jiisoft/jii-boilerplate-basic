/**
 * @namespace Jii
 * @ignore
 */
window.Jii = require('jii/deps');

/**
 * @namespace app
 */
window.app = Jii.namespace('app');

// Framework deps
require('jii-comet/sockjs');
require('jii-comet/neat');
require('jii-urlmanager');
require('jii-clientrouter');
require('jii-model');
require('jii-ar-sql');
require('jii-view');

// Module files
require('./layouts/LayoutView.jsx');