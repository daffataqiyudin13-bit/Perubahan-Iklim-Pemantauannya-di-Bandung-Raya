
document.addEventListener('DOMContentLoaded', () => {
    // Helper to create charts safely
    const createChart = (id, type, labels, label, data, color) => {
        const ctx = document.getElementById(id);
        if(!ctx) return;
        new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label, data: data,
                    borderColor: color, backgroundColor: color + '20',
                    borderWidth: 2, fill: true, tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(255,255,255,0.05)' } } } }
        });
    };

    // Forecast Charts
    createChart('chart-temp', 'line', ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], 'Temp °C', [25,26,24,23,26,27,25], '#F59E0B');
    createChart('chart-aqi', 'line', ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], 'AQI', [60,65,80,95,70,55,45], '#38BDF8');
    
    // Tracker Charts
    createChart('chart-part', 'bar', ['Jan','Feb','Mar','Apr','May'], 'Participants', [120, 150, 200, 180, 250], '#22C55E');
});
