const FindRouteApi = require('../api/findRouteApi');

const initRoutes = function (server) {
    server.get('/find-route', async function (req, res, next) {
        let foundRoute;

        try {
            foundRoute = await FindRouteApi.findRoute(req.query.from, req.query.to);
        } catch (ex) {
            res.status(400).json({
                success: false,
                error: ex
            });

            return next();
        }

        res.json({
            success: true,
            route: foundRoute
        });

        return next();
    });
};

module.exports = initRoutes;