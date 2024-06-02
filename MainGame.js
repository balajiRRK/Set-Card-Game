let player =1;
let set = [];
let click =0;

difficultyMode("normal");

// gneration of the cards
let cards = generateCardsWithSets2(5,81,12);//dealCardsWithoutDuplicates(81);//dealCardsWithoutDuplicates(81);//generateCardsWithSets(1,81);//dealCardsWithoutDuplicates(81);

let cardsInPlay = cards.slice(0,12);

let i = 0;

while (i<cardsInPlay.length){
   
    const card = document.getElementById(i+1);

    // card.setAttribute =cardsInPlay[i];
    detectCard(cardsInPlay[i],i,1,"game-cell","rgba(0,0,0,0)");
    const can =card.getElementsByTagName("canvas");
    // console.log(can.item(0));
    // card.onclick = () => cellClicked(can.item(0).getAttribute("color"));

    card.onclick = () => cellClicked(can.item(0),set);
    i++;    
}

var stopwatch;

// Function to generate 27 rows in the matches table
// function generateMatchesTable() {
//     const tableBody = document.querySelector('#matches-table tbody');
//     for (let i = 1; i <= 27; i++) {
//         const row = document.createElement('tr');
//         const cell = document.createElement('td');
//         cell.textContent = i;
//         row.appendChild(cell);
//         tableBody.appendChild(row);
//     }
//     stopwatch = new Stopwatch('+', 0); 
//     setInterval(function(){
//         document.getElementById("timer").innerHTML= stopwatch.time;
//     },1000);
// }
// document.addEventListener('DOMContentLoaded', generateMatchesTable);
// document.addEventListener('GameStop', function(e){
//     pauseTimer(stopwatch);
// })



function difficultyMode(difficulty){

    const gameGrid = document.getElementById('game-grid');

    let numberOfCards;
    if (difficulty == 'easy'){
        numberOfCards == 6; 
    }else if (difficulty === 'normal') {
        numberOfCards = 12;
    } else if (difficulty === 'hard') {
        numberOfCards = 24;
    }

    for (let i = 1; i <= numberOfCards; i++) {
        const card = document.createElement('div');
        const can =card.getElementsByTagName("canvas");
        card.className = 'game-cell';
        card.setAttribute("id",i);
        
        gameGrid.appendChild(card);
    }

    if (numberOfCards === 6) {
        gameGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (numberOfCards === 12) {
        gameGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (numberOfCards === 24) {
        gameGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }
}

function cellClicked(card,set){
    setCard= reforgeCard(card);
    
    // console.log("the color of the reforged card "+setCard.color);
    
    console.log("The inset is "+isInSet(set,setCard));
    if(  isInSet(set,setCard)==false && set.length<3 ){
        set.push(setCard);
        // console.log("here")
    }else if(isInSet(set,setCard)){
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

function restartGame(){
    window.location.href = 'home.html';
}