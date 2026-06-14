
document.addEventListener('DOMContentLoaded', () => {
    const mapPaths = document.querySelectorAll('.region-path');
    const tooltip = document.getElementById('map-tooltip');
    if(!tooltip) return;

    const regionData = {
        'bandung': { name: 'Kota Bandung', aqi: 82, temp: 27, hum: 75, ehs: 65 },
        'cimahi': { name: 'Kota Cimahi', aqi: 75, temp: 26.5, hum: 72, ehs: 68 },
        'kab-bandung': { name: 'Kab. Bandung', aqi: 95, temp: 28, hum: 70, ehs: 55 },
        'kbb': { name: 'Bandung Barat', aqi: 45, temp: 23, hum: 82, ehs: 85 },
        'sumedang': { name: 'Kab. Sumedang', aqi: 55, temp: 25, hum: 78, ehs: 78 }
    };

    const updatePanel = (id) => {
        const d = regionData[id];
        document.getElementById('panel-title').textContent = d.name;
        document.getElementById('panel-aqi').textContent = d.aqi;
        document.getElementById('panel-temp').textContent = d.temp + '°C';
        document.getElementById('panel-hum').textContent = d.hum + '%';
        
        // Update Circle EHS
        const circle = document.getElementById('ehs-circle');
        document.getElementById('ehs-score').textContent = d.ehs;
        circle.setAttribute('stroke-dasharray', `${d.ehs}, 100`);
        circle.style.stroke = d.ehs > 70 ? 'var(--success)' : (d.ehs > 50 ? 'var(--warning)' : 'var(--danger)');
    };

    mapPaths.forEach(path => {
        path.addEventListener('mousemove', (e) => {
            const d = regionData[path.id];
            tooltip.innerHTML = `<strong>${d.name}</strong><br>AQI: ${d.aqi} | Temp: ${d.temp}°C`;
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
            tooltip.style.opacity = '1';
        });
        path.addEventListener('mouseleave', () => tooltip.style.opacity = '0');
        path.addEventListener('click', () => {
            mapPaths.forEach(p => p.classList.remove('active'));
            path.classList.add('active');
            updatePanel(path.id);
        });
    });

    // Init first selection
    if(document.getElementById('bandung')) {
        document.getElementById('bandung').classList.add('active');
        updatePanel('bandung');
    }
});
