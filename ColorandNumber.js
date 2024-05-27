/**
 * Function to check if the colors of the three cards form a valid set.
 * A valid set is when all colors are the same or all colors are different.
 * 
 * @param {Object} card1 - The first card object with a color property.
 * @param {Object} card2 - The second card object with a color property.
 * @param {Object} card3 - The third card object with a color property.
 * @returns {boolean} - Returns true if the colors form a valid set, otherwise false.
 */
function checkColor(card1, card2, card3) {
    const colors = [card1.color, card2.color, card3.color];
    // A set will contain unique values, so its size will be 1 if all colors are the same,
    // or 3 if all colors are different.
    return (new Set(colors).size === 1 || new Set(colors).size === 3);
}

/**
 * Function to check if the numbers on the three cards form a valid set.
 * A valid set is when all numbers are the same or all numbers are different.
 * 
 * @param {Object} card1 - The first card object with a number property.
 * @param {Object} card2 - The second card object with a number property.
 * @param {Object} card3 - The third card object with a number property.
 * @returns {boolean} - Returns true if the numbers form a valid set, otherwise false.
 */
function checkNumber(card1, card2, card3) {
    const numbers = [card1.number, card2.number, card3.number];
    // A set will contain unique values, so its size will be 1 if all numbers are the same,
    // or 3 if all numbers are different.
    return (new Set(numbers).size === 1 || new Set(numbers).size === 3);
}

// Example usage of the checkColor and checkNumber functions

// Example set of cards with the same color and different numbers
const card1 = { color: 'red', number: 1 };
const card2 = { color: 'red', number: 2 };
const card3 = { color: 'red', number: 3 };

console.log(checkColor(card1, card2, card3)); // true (all colors are the same)
console.log(checkNumber(card1, card2, card3)); // true (all numbers are different)

// Example set of cards with different colors and the same number
const card4 = { color: 'red', number: 1 };
const card5 = { color: 'blue', number: 1 };
const card6 = { color: 'green', number: 1 };

console.log(checkColor(card4, card5, card6)); // true (all colors are different)
console.log(checkNumber(card4, card5, card6)); // true (all numbers are the same)