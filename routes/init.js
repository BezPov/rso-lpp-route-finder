module.exports = function (server) {
    server.get('/', (req, res, next) => {
        res.json({
            name: 'lpp-route-finder',
            version: process.env.npm_package_version,
            description: 'Finds the route to take between two stations'
        });

        return next();
    });

    require('./infoRoutes')(server);
    require('./healthRoutes')(server);
    require('./metricsRoutes')(server);
    require('./etcdRoutes')(server);

    require('./findRouteRoutes')(server);
};