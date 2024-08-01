// // Specific JavaScript for the educational resources page

// document.addEventListener('DOMContentLoaded', () => {
//     const resources = [
//         { title: 'How to Improve Soil Quality', url: 'https://example.com/soil-quality' },
//         { title: 'Effective Irrigation Techniques', url: 'https://example.com/irrigation' },
//         { title: 'Organic Farming Basics', url: 'https://example.com/organic-farming' }
//     ];

//     const resourceList = document.querySelector('.resource-list');

//     resources.forEach(resource => {
//         const listItem = document.createElement('li');

//         const link = document.createElement('a');
//         link.href = resource.url;
//         link.target = '_blank';
//         link.textContent = resource.title;

//         listItem.appendChild(link);
//         resourceList.appendChild(listItem);
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    // const resources = [
    //     { title: 'How to Improve Soil Quality', url: 'https://example.com/soil-quality' },
    //     { title: 'Effective Irrigation Techniques', url: 'https://example.com/irrigation' },
    //     { title: 'Organic Farming Basics', url: 'https://example.com/organic-farming' }
    // ];

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

    // Search functionality
    const searchForm = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = document.getElementById('query').value;
        if (!query) return;

        try {
            const response = await fetch(`/search?q=${query}`);
            const data = await response.json();
            displayResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
            resultsDiv.innerHTML = `<p>Error fetching search results.</p>`;
        }
    });

    function displayResults(data) {
        resultsDiv.innerHTML = '';
        if (data.organic_results && data.organic_results.length > 0) {
            data.organic_results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerHTML = `
                    <h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                    <p>${result.snippet}</p>
                `;
                resultsDiv.appendChild(resultItem);
            });
        } else {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        }
    }
});
