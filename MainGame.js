var scoreboard;
const playerKeys = ['A', 'L', 'H', 'K'];

// creating the players
let playerList = [];
let player =1;
let set = [];
let click =0;

addPlayerToGame(player,playerList);
// initializeScore();
diffultyMode("normal");

// gneration of the cards
let cards = dealCardsWithoutDuplicates(81);

let cardsInPlay = cards.slice(0,12);


let i =0;

while (i<cardsInPlay.length){
   
    const card = document.getElementById(i+1);

    card.setAttribute =cardsInPlay[i];
    detectCard(cardsInPlay[i],i);
    const can =card.getElementsByTagName("canvas");
    // console.log(can.item(0));
    // card.onclick = () => cellClicked(can.item(0).getAttribute("color"));

    i++;    
    card.onclick = () => cellClicked(can.item(0),set);
}

function addPlayerToGame(numOfPlayers,playerList){
    while(playerList.length<numOfPlayers ){
    addToPlayerList(numOfPlayers, playerList);
    }
}

//function initializeScore(){
    //scoreboard = new Array(playerList.length).fill(0);
    //const urlParams = new URLSearchParams(window.location.search);
    //const playerNum = parseInt(urlParams.get('playerNum'));
    //playerScoresContainer.innerHTML = '';
    //const playerScoresContainer = document.getElementById('player-scores');
    // Clear any existing content
    // Loop through the players array and create a list item for each player
    /*for(let i = 0; i < playerNum; i ++){
        const listItem = document.createElement('li');
        listItem.textContent = `${player}: 0`;
        playerScoresContainer.appendChild(listItem);
    } */
    //playerNum.forEach(player => {
    //const listItem = document.createElement('li');
    //listItem.textContent = `${player}: 0`;
    //playerScoresContainer.appendChild(listItem);
    //});
//}
//document.addEventListener('DOMContentLoaded', () => {
    //const players = [
       // { id: 1, name: 'Score', score: 0 },
    //];
    //initializeScoreboard();
    //if (players !== -1) {
    //    scoreKeeping(scoreboard, playerIndex); 
    //}
    //setTimeout(() => saveScore(1, 10), 1000); // Update Player's score to 10 after 1 second
//});

var stopwatch;

// Function to generate 27 rows in the matches table
function generateMatchesTable() {
    const tableBody = document.querySelector('#matches-table tbody');
    for (let i = 1; i <= setsNum; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = i;
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
    stopwatch = new Stopwatch('+', 0); 
    setInterval(function(){
        document.getElementById("timer").innerHTML= stopwatch.time;
    },1000);
}
document.addEventListener('DOMContentLoaded', generateMatchesTable);
document.addEventListener('GameStop', function(e){
    pauseTimer(stopwatch);
})

//document.addEventListener('keyup', (e) => {
    //var playerIndex = playerKeys.indexOf(e.code);
//});

function diffultyMode(difficulty){
    const gameGrid = document.getElementById('game-grid');

    let numberOfCards;
    if (difficulty == 'easy' || difficulty === 'normal'){
        numberOfCards == 12; 
    } else if (difficulty === 'hard') {
        numberOfCards = 24;
    }

    for (let i = 1; i <= numberOfCards; i++) {
        const card = document.createElement('div');
        card.className = 'game-cell';
        card.setAttribute("id",i);
        
        gameGrid.appendChild(card);
    }

   if (numberOfCards === 12) {
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

    if (set.length ==3){
        console.log("Checking cards");
        console.log(checkIfSet(set[0],set[1],set[2]));
        console.log("end check")
       if( checkIfSet(set[0],set[1],set[2])){
        // add to set found section
       }
       set.length=0;
        
        
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
function showInstructions(){
    window.location.href = 'instructions.html';
}

function restartGame(){
    window.location.href = 'home.html';
}