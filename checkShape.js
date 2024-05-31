// Ryan Parand
// this function checks if the shape of the cards form a set.
// I learned how to make a function using chatGPT and the youtube video was in the resources page.
// video refrence: https://www.youtube.com/watch?v=8xPsg6yv7TU

// the function checks three cards shape and compare whther they are all same or all different.
function checkShapes(card1, card2, card3) {
    //store the shape value of each card in an array.
    const shapes = [card1.shape, card2.shape, card3.shape];
    //check whether the shape of the three cards are same.
    const allSame = (shapes[0] == shapes[1]) && (shapes[0] == shapes[2]) && (shapes[1] == shapes[2]);
    //check whether the shape of the three cards are different.
    const allDifferent = (shapes[0] != shapes[1]) && (shapes[0] != shapes[2]) && (shapes[1] != shapes[2]);
    //return true if either the shapes are same or are different.
    return allSame || allDifferent;
}
