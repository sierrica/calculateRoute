var core = require ('../controllers/server.core.controller');

module.exports = function(app) {
    // Define error pages
    app.route ('/server-error').get (core.renderServerError);
    app.route ('/not-found').get (core.renderNotFound);

    // Define application route
    app.route ('/*').get (core.renderIndex);
};