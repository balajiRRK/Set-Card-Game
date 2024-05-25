// Define the possible colors
const colors = ['red', 'green', 'blue'];

// Function to get a color
function getColor(index) {
    // Ensure the index is valid
    if (index < 0 || index >= colors.length) {
        throw new Error('Invalid color index');
    }
    return colors[index];
}

// Example usage
console.log(getColor(0)); // Output: red
console.log(getColor(1)); // Output: green
console.log(getColor(2)); // Output: blue
