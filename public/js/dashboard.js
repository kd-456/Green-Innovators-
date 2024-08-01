// Specific JavaScript for the dashboard page

// document.addEventListener('DOMContentLoaded', () => {
//     const stats = [
//         { title: 'Total Area', value: '50 acres' },
//         { title: 'Crops Planted', value: '3 types' },
//         { title: 'Water Usage', value: '20,000 liters' },
//         { title: 'Fertilizer Used', value: '500 kg' },
//         { title: 'Harvested Yield', value: '15 tons' }
//     ];

//     const dashboardStats = document.querySelector('.dashboard-stats');

//     stats.forEach(stat => {
//         const statCard = document.createElement('div');
//         statCard.className = 'stat-card';

//         const statTitle = document.createElement('h3');
//         statTitle.textContent = stat.title;

//         const statValue = document.createElement('p');
//         statValue.textContent = stat.value;

//         statCard.appendChild(statTitle);
//         statCard.appendChild(statValue);
//         dashboardStats.appendChild(statCard);
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const stats = [
        { title: 'Total Area', value: '50 acres', icon: '🌾' },
        { title: 'Crops Planted', value: '3 types', icon: '🌱' },
        { title: 'Water Usage', value: '20,000 liters', icon: '💧' },
        { title: 'Fertilizer Used', value: '500 kg', icon: '🧪' },
        { title: 'Harvested Yield', value: '15 tons', icon: '🌽' }
    ];

    const dashboardStats = document.querySelector('.dashboard-stats');

    if (stats.length === 0) {
        const noStatsMessage = document.createElement('p');
        noStatsMessage.textContent = 'No statistics available.';
        dashboardStats.appendChild(noStatsMessage);
        return;
    }

    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';

        const statIcon = document.createElement('span');
        statIcon.className = 'stat-icon';
        statIcon.textContent = stat.icon;

        const statContent = document.createElement('div');
        statContent.className = 'stat-content';

        const statTitle = document.createElement('h3');
        statTitle.textContent = stat.title;

        const statValue = document.createElement('p');
        statValue.textContent = stat.value;

        statContent.appendChild(statTitle);
        statContent.appendChild(statValue);
        statCard.appendChild(statIcon);
        statCard.appendChild(statContent);
        dashboardStats.appendChild(statCard);
    });
});
