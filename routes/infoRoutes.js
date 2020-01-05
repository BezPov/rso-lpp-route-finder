const logger = require('../services/logging');

const initRoutes = function (server) {
    server.get('/info', function (req, res, next) {
        res.json({
            apiCalls: [

            ]
        });

        return next();
    });
};

module.exports = initRoutes;