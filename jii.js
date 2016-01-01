// Load modules
require('./app/core/server.js');
require('./app/site/server.js');
require('./app/users/server.js');

// Set applications
require('jii-workers')
    .application('console', Jii.mergeConfigs(
        require('./app/config/main'),
        require('./app/config/server/main'),
        require('./app/config/server/console'),
        require('./config')
    ))
    .application(Jii.mergeConfigs(
        require('./app/config/main'),
        require('./app/config/server/main'),
        require('./app/config/server/web'),
        require('./config')
    ))
