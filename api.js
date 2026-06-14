
const WeatherAPI = {
    async fetchDashboardData() {
        await new Promise(r => setTimeout(r, 600)); // Simulate latency
        return {
            aqi: 65, temp: 26.5, hum: 78, wind: 3.2,
            pm25: 15.2, pm10: 28.4, status: 'Moderate',
            timestamp: new Date().toLocaleTimeString()
        };
    },
    getEHS(aqi, temp) {
        let score = 100 - (aqi * 0.4) - (Math.abs(temp - 24) * 2);
        return Math.max(0, Math.min(100, Math.round(score)));
    }
};
