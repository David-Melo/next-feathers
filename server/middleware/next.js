const nextApp = require('../next').nextApp;
const handle = require('../next').handle;
const { parse } = require('url');

// Add services here.
// If the path is not been added here
// it will be passed to next.js
const feathersServices = {
    '/users': true,
};

const isFeathersService = path => feathersServices[path] === true;

module.exports = function(options = {}) {

    return function next(req, res, next) {

        return isFeathersService(req.path) ? next() : handle(req, res);

    };

};
