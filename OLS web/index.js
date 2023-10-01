function createInputFields() {
    const numEntries = parseInt(document.getElementById("numEntries").value);

    if (isNaN(numEntries) || numEntries < 2) {
        alert("Please enter a valid number of entries (minimum 2).");
        return;
    }

    const dataInputsDiv = document.getElementById("dataInputs");
    dataInputsDiv.innerHTML = "";

    for (let i = 1; i <= numEntries; i++) {
        dataInputsDiv.innerHTML += `
            <div>
                <label for="x${i}">X${i}:</label>
                <input type="number" id="x${i}">
                <label for="y${i}">Y${i}:</label>
                <input type="number" id="y${i}">
            </div>
        `;
    }
}

function calculateRegression() {
    const numEntries = parseInt(document.getElementById("numEntries").value);

    if (isNaN(numEntries) || numEntries < 2) {
        alert("Please enter a valid number of entries (minimum 2).");
        return;
    }

    const xValues = [];
    const yValues = [];

    for (let i = 1; i <= numEntries; i++) {
        xValues.push(parseFloat(document.getElementById(`x${i}`).value));
        yValues.push(parseFloat(document.getElementById(`y${i}`).value));
    }

    const xMean = xValues.reduce((acc, val) => acc + val, 0) / numEntries;
    const yMean = yValues.reduce((acc, val) => acc + val, 0) / numEntries;

    let numerator = 0;
    let denominator = 0;

    for (let i = 0; i < numEntries; i++) {
        numerator += (xValues[i] - xMean) * (yValues[i] - yMean);
        denominator += (xValues[i] - xMean) ** 2;
    }

    const B1 = numerator / denominator;
    const B0 = yMean - B1 * xMean;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Linear Regression Results</h2>
        <p>B0 (Intercept): ${B0.toFixed(4)}</p>
        <p>B1 (Slope): ${B1.toFixed(4)}</p>
    `;
}
