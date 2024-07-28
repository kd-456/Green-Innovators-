// Specific JavaScript for the dashboard page

document.addEventListener('DOMContentLoaded', () => {
    const stats = [
        { title: 'Total Area', value: '50 acres' },
        { title: 'Crops Planted', value: '3 types' },
        { title: 'Water Usage', value: '20,000 liters' },
        { title: 'Fertilizer Used', value: '500 kg' },
        { title: 'Harvested Yield', value: '15 tons' }
    ];

    const dashboardStats = document.querySelector('.dashboard-stats');

    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';

        const statTitle = document.createElement('h3');
        statTitle.textContent = stat.title;

        const statValue = document.createElement('p');
        statValue.textContent = stat.value;

        statCard.appendChild(statTitle);
        statCard.appendChild(statValue);
        dashboardStats.appendChild(statCard);
    });
});
