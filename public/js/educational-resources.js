// Specific JavaScript for the educational resources page

document.addEventListener('DOMContentLoaded', () => {
    const resources = [
        { title: 'How to Improve Soil Quality', url: 'https://example.com/soil-quality' },
        { title: 'Effective Irrigation Techniques', url: 'https://example.com/irrigation' },
        { title: 'Organic Farming Basics', url: 'https://example.com/organic-farming' }
    ];

    const resourceList = document.querySelector('.resource-list');

    resources.forEach(resource => {
        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.href = resource.url;
        link.target = '_blank';
        link.textContent = resource.title;

        listItem.appendChild(link);
        resourceList.appendChild(listItem);
    });
});
