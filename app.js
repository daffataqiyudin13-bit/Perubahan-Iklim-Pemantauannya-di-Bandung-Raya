
document.addEventListener('DOMContentLoaded', async () => {
    // Topbar dynamic insight
    const insights = [
        "Kota Bandung recorded the highest AQI this week.",
        "Bandung Barat currently has the healthiest environmental score.",
        "PM2.5 levels remain within moderate limits across the region."
    ];
    const elInsight = document.getElementById('ai-insight-text');
    if(elInsight) elInsight.textContent = insights[Math.floor(Math.random() * insights.length)];

    // Populate Dashboard Data
    const aqiEl = document.getElementById('dash-aqi');
    if(aqiEl) {
        const data = await WeatherAPI.fetchDashboardData();
        aqiEl.textContent = data.aqi;
        document.getElementById('dash-temp').textContent = data.temp + '°C';
        document.getElementById('dash-hum').textContent = data.hum + '%';
        if(document.getElementById('dash-wind')) document.getElementById('dash-wind').textContent = data.wind + 'm/s';
        
        const ehs = WeatherAPI.getEHS(data.aqi, data.temp);
        const ehsEl = document.getElementById('dash-ehs');
        if(ehsEl) ehsEl.textContent = ehs;
    }
});
