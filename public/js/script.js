document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('query').value;

    fetch(`/search?q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API response data:', data);
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            if (data.organic_results && data.organic_results.length > 0) {
                data.organic_results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.innerHTML = `
                        <h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                        <p>${result.snippet}</p>
                    `;
                    resultsDiv.appendChild(resultItem);
                });
            } else {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('results').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        });
});
