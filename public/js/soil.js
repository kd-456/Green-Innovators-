document.getElementById('moisture-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const weightBefore = parseFloat(document.getElementById('weight-before').value);
    const weightAfter = parseFloat(document.getElementById('weight-after').value);

    if (isNaN(weightBefore) || isNaN(weightAfter) || weightBefore <= 0 || weightAfter <= 0) {
        alert('Please enter valid weights.');
        return;
    }

    const moistureContent = ((weightBefore - weightAfter) / weightBefore) * 100;

    document.getElementById('result').innerHTML = `<p>Soil Moisture Content: ${moistureContent.toFixed(2)}%</p>`;
});
