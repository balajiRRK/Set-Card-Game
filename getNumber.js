// Define the possible numbers
const numbers = [1, 2, 3];

// Function to get a number
function getNumber(index) {
    // Ensure the index is valid
    if (index < 0 || index >= numbers.length) {
        throw new Error('Invalid number index');
    }
    return numbers[index];
}

// Example usage
console.log(getNumber(0)); // Output: 1
console.log(getNumber(1)); // Output: 2
console.log(getNumber(2)); // Output: 3
