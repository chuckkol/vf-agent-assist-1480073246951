#!/usr/bin/env node

'use strict';
//new line
//faye = require('faye');
//bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
//---------------
var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
//new line
//bayeux.attach(server); 
//-------------------
server.listen(port, function() {
  console.log('Server running on port: %d', port);
});
