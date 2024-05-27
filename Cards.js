function dealCards(cardsNum)
{
  let cardsDealt = [];
  
  // creates random cards based off cardNum function argument and adds them to array
  for (let i = 0; i < cardsNum; i++)
  {
    cardsDealt.push(createRandomCard());
  }

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

function checkIfSet(card1, card2, card3)
{
  let shape = checkShape(card1, card2, card3);
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
