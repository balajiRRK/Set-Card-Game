// Ryan Parand
// this function checks if the shading of the cards form a set.
// I learned how to make a function using chatGPT and the youtube video was in the resources page.
// video refrence: https://www.youtube.com/watch?v=8xPsg6yv7TU

// the function checks three cards shading and compare whther they are all same or all different
function checkShading(card1, card2, card3) {
    //store the shape value of each card in an array
    const shading = [card1.shape, card2.shape, card3.shape];
    //check whether the shape of the three cards are same
    const allSame =  (shading[0] == shading[1]) &&  (shading[0] == shading[2]) &&  (shading[1] == shading[2]);
    //check whether the shape of the three cards are different
    const allDifferent =  (shading[0] != shading[1]) &&  (shading[0] != shading[2]) &&  (shading[1] != shading[2]);
    //return true if either the shading are same or are different
    return allSame || allDifferent;
}
