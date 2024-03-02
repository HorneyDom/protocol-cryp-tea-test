// Function to perform basic mathematical operations
function performMathOperations(num1, num2) {
    console.log("Addition:", num1 + num2); // Addition
    console.log("Subtraction:", num1 - num2); // Subtraction
    console.log("Multiplication:", num1 * num2); // Multiplication
    console.log("Division:", num1 / num2); // Division
}

// Function to fetch Bitcoin price
async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.usd;
        return bitcoinPrice;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
}

// Call the function to perform mathematical operations
console.log("Mathematical Operations:");
performMathOperations(10, 5);

// Call the function to fetch Bitcoin price
fetchBitcoinPrice()
    .then(price => {
        console.log("Current Bitcoin price in USD:", price);
    })
    .catch(error => {
        console.error('Error:', error);
    });
