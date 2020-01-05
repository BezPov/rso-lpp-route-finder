const axios = require('axios');

class FindRouteApi {
    // TESTING: http://localhost:8081/find-route?from=1959&to=2075 (Krimska iz centra, Ruski car iz centra)
    static async findRoute(fromStationId, toStationId) {
        const fromStation = await FindRouteApi.fetchStation(fromStationId);
        const toStation = await FindRouteApi.fetchStation(toStationId);

        if (!fromStation) {
            throw new Error('fromStation.notFound');
        } else if (!toStation) {
            throw new Error('toStation.notFound');
        }

        return;
    }

    static async fetchStation(stationId) {
        const url = `http://localhost:8080/stations/${stationId}`;
        // PROD const url = `http://lpp-parser-service/stations/${stationId}`;

        try {
            const request = await axios.get(url);

            const data = request.data;

            if (data.success) {
                return data.data;
            }
        } catch (ex) {
            console.log(ex);
        }
    }
}

module.exports = FindRouteApi;