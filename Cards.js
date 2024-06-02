

function dealCardsWithoutDuplicates(cardsNum)
{

  let cardsDealt = [];
  
  
  // creates random cards based off cardNum function argument and adds them to array if they are not a duplicate
  while (cardsDealt.length != cardsNum)
    {
      
      let card = createRandomCard();
      let duplicate = false;

    // check if there is a duplicate card in cardsDealt array
    for (let j = 0; j < cardsDealt.length; j++)
    {
      
      
     
        if (equals(card,cardsDealt[j]))
        {
          duplicate = true;
        }
      
    }

    // add to cardsDealt array if not duplicate
    if (!duplicate)
    {
      cardsDealt.push(card);
    }
  }
console.log(cardsDealt.length);
  return cardsDealt;
}

function createRandomCard()
{
  let color = "";
  let shape = "";
  let shading = "";
  let rng = Math.floor((Math.random() * 3) + 1); // rng integer of inclusive 1-3, gotten from w3 schools  

  // assign random color
  if (rng == 1)
  {
    color = "red";
  } else if (rng == 2)
  {
    color = "purple";
  } else if (rng == 3)
  {
    color = "green";
  }

  rng = Math.floor((Math.random() * 3) + 1); // recalculates rng to each time so that an rng of 3 wont be 3 for all of them.
  // assign random shape
  if (rng == 1)
  {
    shape = "oval";
  } else if (rng == 2)
  {
    shape = "diamond";
  } else if (rng == 3)
  {
    shape = "curve";
  }

  rng = Math.floor((Math.random() * 3) + 1); // addition to the above comment
  // assign random shading
  if (rng == 1)
  {
    shading = "filled";
  } else if (rng == 2)
  {
    
    shading = "dashed"; //fixed typo
  } else if (rng == 3)
  {
    shading = "none"; //fixed typo
  }

  // create card object
  let card = {
    shape: shape,
    color: color,
    shading: shading, // rng integer of inclusive 1-2, gotten from w3 schools 
    number: Math.floor((Math.random() * 3) + 1), // rng integer of inclusive 1-3, gotten from w3 schools 
    
  };  
  
  return card;
}
function equals(card,card2){
  return card.shape==card2.shape && card.color==card2.color && card.shading == card2.shading && card.number == card2.number;
}

function checkIfSet(card1, card2, card3)
{
  let shape = checkShapes(card1, card2, card3);
  let color = checkColor(card1, card2, card3);
  let shading = checkShading(card1, card2, card3);
  let number = checkNumber(card1, card2, card3);
  let isSet = false;
  if (shape == true && color == true && shading == true && number == true)
  {
    isSet = true;
  }

  return isSet;
}

function generateCardsWithSets(setsNum, cardCount)
{
  let setsCount = 0;
  let cardsDealt = [];
  while (setsCount != setsNum)
  {
    cardsDealt = dealCardsWithoutDuplicates(cardCount);

    // iterate through every combination of 3 cards to count how many Sets there are in the dealt deck.
    for (let i = 0; i < cardCount; i++)
    {
      for (let j = 0; j < cardCount; j++)
      {
        for (let k = 0; k < cardCount; k++)
        {
          if (checkIfSet(cardsDealt[i], cardsDealt[j], cardsDealt[k]))
          {
            setsCount++;
          }
        } 
      }
    }
    
  }
  
  return cardsDealt;
}

function generateCardsWithSets2(setsNum, cardCount,deckSize)
{
  let setsCount = 0;
  let cardsDealt = [];
  let sets= [];
  let equal = false;
  // while (setsCount != setsNum)

    cardsDealt = dealCardsWithoutDuplicates(cardCount).slice(0,deckSize);

    // iterate through every combination of 3 cards to count how many Sets there are in the dealt deck.
    for (let i = 0; i < deckSize; i++)
    {
      for (let j = 0; j < deckSize; j++)
      {
        for (let k = 0; k < deckSize; k++)
        {
          
          if (checkIfSet(cardsDealt[i], cardsDealt[j], cardsDealt[k]))
          {
            if(sets.length>0 ){
              for (let l =0;l<sets.length;l++){
                equal = equal || setEqual(sets[l],[cardsDealt[i],cardsDealt[j],cardsDealt[k]]);
                console.log(equal);
                
              } 

              }else if(sets.length==0) {
                sets.push([cardsDealt[i],cardsDealt[j],cardsDealt[k]]);
              setsCount++;
              }

             
          }
        }
        
      }
}
    console.log("maximum amount of sets "+setsCount);
    console.log(sets);
  // }
  
  return cardsDealt;
  }


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

// // Example set of cards with the same color and different numbers
// const card1 = { color: 'red', number: 1 };
// const card2 = { color: 'red', number: 2 };
// const card3 = { color: 'red', number: 3 };

// console.log(checkColor(card1, card2, card3)); // true (all colors are the same)
// console.log(checkNumber(card1, card2, card3)); // true (all numbers are different)

// // Example set of cards with different colors and the same number
// const card4 = { color: 'red', number: 1 };
// const card5 = { color: 'blue', number: 1 };
// const card6 = { color: 'green', number: 1 };

// console.log(checkColor(card4, card5, card6)); // true (all colors are different)
// console.log(checkNumber(card4, card5, card6)); // true (all numbers are the same)

// the function checks three cards shading and compare whther they are all same or all different
 function checkShading(card1, card2, card3) {
  //store the shape value of each card in an array
  const shading = [card1.shading, card2.shading, card3.shading];
  // A set will contain unique values, so its size will be 1 if all colors are the same,
  // or 3 if all colors are different.
  return (new Set(shading).size === 1 || new Set(shading).size === 3);
}


// the function checks three cards shape and compare whther they are all same or all different.
 function checkShapes(card1, card2, card3) {
  //store the shape value of each card in an array.
  const shape = [card1.shape, card2.shape, card3.shape];
  // A set will contain unique values, so its size will be 1 if all colors are the same,
  // or 3 if all colors are different.
  return (new Set(shape).size === 1 || new Set(shape).size === 3);
}

function setEqual(set1,set2){
  let check = 0;
  console.log("set1:")
  console.log(set1);
  console.log("set2:")
  console.log(set2);
  for(let i =0; i< set1.length;i++){
    for(let k=0; k<set1.length;k++){
      if(equals(set1[i],set2[k])){
        console.log("inside equals");

        console.log(set1[i]);
        console.log("=?");
        console.log(set2[k]);
        check++;
      }
    }
   console.log("The checks are " + check);
  }
  return console.log(check ==3);
}