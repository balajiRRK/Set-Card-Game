
/*
Replace the card in cardsInuse with a card from the cards that isn't in the cardsInuse
*/
function replaceCard(cardsInUse,cardpool,cardToBeReplaced){
    // Code made with the assistance of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for(let i =0; i< cardsInUse.length;i++){
        if (cardsInUse[i] == cardToBeReplaced){ //  checks that the card that will be replaced is the one that will be replaced
            tmpCard = cardsInUse[i]; // stores the card that will be replaced
            cardpool[cardpool.length] = tmpCard; // put the replaced card back into the card pool
            cardsInUse[i] =cardpool.shift(); // Removes the first element in cardpool and replaces the card at cardsInUse[i]
            
        }
    }

}
/*
Replaces multiple cards from cards in use
*/
function replaceCards(cardsInUse,cardpool,cardsToBeReplaced){

    for (let i=0;i<cardsToBeReplaced.length;i++){  // replaces  a array of cards

        replaceCards(cardsInUse,cardpool,cardsToBeReplaced[i]);
    }
}