var scoreboard;
const playerKeys = ['A', 'L', 'H', 'K'];

// creating the players
let playerList = [];
let player =4;

addPlayerToGame(player,playerList);
initializeScore();
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
        card.onclick = () => cellClicked(i);
        gameGrid.appendChild(card);
    }

   if (numberOfCards === 12) {
        gameGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (numberOfCards === 24) {
        gameGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }
}

function showInstructions(){
    window.location.href = 'instructions.html';
}

function restartGame(){
    window.location.href = 'home.html';
}