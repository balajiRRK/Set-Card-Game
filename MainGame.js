//Initialize game variables
let player =1;
let set = [];
let click =0;

// Set game difficulty to normal
difficultyMode("normal");

// Gneration cards for the game
let cards = generateCardsWithSets2(5,81,12);

let cardsInPlay = cards.slice(0,12);

let i = 0;

// Loop through each card in play
while (i<cardsInPlay.length){
   
    const card = document.getElementById(i+1);
    detectCard(cardsInPlay[i],i,1,"game-cell","rgba(0,0,0,0)");
    const can =card.getElementsByTagName("canvas");
    card.onclick = () => cellClicked(can.item(0),set);
    i++;    
}

var stopwatch;

// Function to set game difficulty mode
function difficultyMode(difficulty){

    const gameGrid = document.getElementById('game-grid');

    let numberOfCards;
    // Determine the number of cards based on the selected difficulty
    if (difficulty == 'easy'){
        numberOfCards == 6; 
    }else if (difficulty === 'normal') {
        numberOfCards = 12;
    } else if (difficulty === 'hard') {
        numberOfCards = 24;
    }

    // Create game cells based on the number of cards
    for (let i = 1; i <= numberOfCards; i++) {
        const card = document.createElement('div');
        const can =card.getElementsByTagName("canvas");
        card.className = 'game-cell';
        card.setAttribute("id",i);
        
        gameGrid.appendChild(card);
    }

    // Adjust grid layout based on the number of cards
    if (numberOfCards === 6) {
        gameGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (numberOfCards === 12) {
        gameGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (numberOfCards === 24) {
        gameGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }
}

// Function to handle cell click events
function cellClicked(card,set){
    setCard= reforgeCard(card);
    console.log("The inset is "+isInSet(set,setCard));
    if(  isInSet(set,setCard)==false && set.length<3 ){
        set.push(setCard);
    // console.log("here")
    } else if(isInSet(set,setCard)){
        console.log("select another card")
    }

    // console.log(set.length);
    let setGrid=   document.getElementById('set-grid');

    if (set.length ==3){
        console.log("Checking cards");
        console.log(checkIfSet(set[0],set[1],set[2]));
        console.log("end check")
       if( checkIfSet(set[0],set[1],set[2])){
        // add to set found section
        
     
            for (let i = 0; i < set.length; i++) {
                const setFound = document.createElement('div');

                setFound.className = 'set-cell';
                setFound.style.gridTemplateColumns = 'repeat(1, 1fc)';
                setFound.setAttribute("id",i+1);
            
                setGrid.appendChild(setFound);
                detectCard(set[i],0,.5,"set-cell","gray");
            }
        }
        while(set.length !=0){
            set.pop();
        }
    }
}

function isInSet(set,card){
    let inSet =false;
    // console.log("isInSet test");
    for(let i=0;i<set.length;i++){
        // console.log(set[i].color+" "+ card.color);
        // console.log(set[i].color ==card.color);
        inSet= inSet|| equals(set[i],card);
    }
    // console.log("end of isInSet test");
    return inSet;
}

//Function to modify card attrinutes
function reforgeCard(card){
    let forgedCard = createRandomCard();
    forgedCard.color =card.getAttribute("color");
    forgedCard.shape =card.getAttribute("shape");
    forgedCard.shading =card.getAttribute("shading");
    forgedCard.number =card.getAttribute("number");
    // console.log("In reforge func "+forgedCard.color);
    // console.log(equals(forgedCar))
    return forgedCard;
}

// Function to restart game
function restartGame(){
    window.location.href = 'home.html';
}