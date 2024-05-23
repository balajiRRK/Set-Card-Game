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
  let rng = Math.floor((Math.random() * 3) + 1); // rng integer of inclusive 1-3 gotten from w3 schools  

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

  // assign random shading
  if (rng == 1)
  {
    shading = "filled";
  } else if (rng == 2)
  {
    shape = "dashed";
  } else if (rng == 3)
  {
    shape = "none";
  }

  // create card object
  let card = {
    shape: shape,
    color: color,
    shading: shading, // rng integer of inclusive 1-2 gotten from w3 schools 
    number: Math.floor((Math.random() * 3) + 1), // rng integer of inclusive 1-3, gotten from w3 schools 
  };  

  return card;
}
