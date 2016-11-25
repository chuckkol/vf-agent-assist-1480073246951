//// ▶▶ require objects ◀◀ ////
var bodyParser = require('body-parser');
/*var db = require('../utils/db');
var airport=require('../model/airport');
var flightPath=require('../model/flightPath');
var auth=require('../model/auth.js');
var user=require('../model/user.js');
var jwt = require('jsonwebtoken');*/
var config = require('./../utils/config');
var sec=config.application.hashToken;

//// ▶▶ application/json parser ◀◀ ////
var jsonParser = bodyParser.json();

//// ▶▶ application/x-www-form-urlencoded parser ◀◀ ////
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var logs = null;

module.exports = function (app) {

    //// ▶▶ enable cors ◀◀ ////
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use( bodyParser.json() );
 
}
