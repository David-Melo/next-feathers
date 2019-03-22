// eslint-disable-next-line no-unused-vars
const next = require('./next');

module.exports = function (app) {
    // Add your custom middleware here. Remember that
    // in Express, the order matters.
    app.get('*', next());
};
