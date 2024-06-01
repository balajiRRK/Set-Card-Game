var scoreboard;
const playerKeys = ['A', 'L', 'H', 'K'];

// creating the players
let playerList = [];
let player =4;

addPlayerToGame(player,playerList);
initializeScore(playerList);
diffultyMode("normal");

// gneration of the cards
let cards = dealCardsWithoutDuplicates(81);
// Maybe make  a shuffle function to mix up the cards in the array later
let cardsInPlay = cards.slice(0,12);


let i =0;

while (i<cardsInPlay.length){
   
    const card = document.getElementById(i+1);

    card.setAttribute =cardsInPlay[i];
    detectCard(cardsInPlay[i],i);

    i++;
}



function addPlayerToGame(numOfPlayers,playerList){
    while(playerList.length<numOfPlayers ){
    addToPlayerList(numOfPlayers, playerList);
    }
}



function initializeScore(playerList){
    scoreboard = new Array(playerList.length).fill(0);
}
var stopwatch;

// Function to generate 27 rows in the matches table
function generateMatchesTable() {
    const tableBody = document.querySelector('#matches-table tbody');
    for (let i = 1; i <= 27; i++) {
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

document.addEventListener('keyup', (e) => {
    var playerIndex = playerKeys.indexOf(e.code);
    if (playerIndex !== -1) {
        scoreKeeping(scoreboard, playerIndex); 
    }
});

function diffultyMode(difficulty){
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
        card.className = 'game-cell';
        card.setAttribute("id",i);
        card.onclick = () => cellClicked(i);
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