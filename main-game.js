let set = [];
let click = 0;
let stopwatch;
// gneration of the cards
let numberOfCards;
// document.addEventListener('DOMContentLoaded', () => {
            
    // get difficulty from call to html page change
    const urlParams = new URLSearchParams(window.location.search);
    const difficulty = urlParams.get('difficulty');

    numberOfCards = difficultyMode(difficulty);
// })
let target = document.getElementsByClassName('game-cell');

let cards = generateCardsWithSets(1, 6); 

let cardsInPlay = cards.slice(0,6);


let i = 0;

while (i < cardsInPlay.length) {
    
    const card = document.getElementById(i+1);
    
    // card.setAttribute = cardsInPlay[i];
    detectCard(cardsInPlay[i],i,1,"game-cell","rgba(0,0,0,0)");
    const can = card.getElementsByTagName("canvas");
    // console.log(can.item(0));
    // card.onclick = () => cellClicked(can.item(0).getAttribute("color"));
    
    card.onclick = () => cellClicked(can.item(0),set);
    i++;    
}
startStopWatch();

function goInstructions() {
    window.location.href = 'difficulty-selection.html';
}

function startGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const difficulty = urlParams.get('difficulty');

    window.location.href = `main-page-layout.html?difficulty=${difficulty}`;
    numberOfCards = difficultyMode(difficulty);
    

}

function startStopWatch(stopwatch) {
    // const tableBody = document.querySelector('#matches-table tbody');
    // for (let i = 1; i <= 27; i++) {
    //     const row = document.createElement('tr');
    //     const cell = document.createElement('td');
    //     cell.textContent = i;
    //     row.appendChild(cell);
    //     tableBody.appendChild(row);
    // }
    stopwatch = new Stopwatch('+', 0); 
    setInterval(function(){
        document.getElementById("timer").innerHTML= stopwatch.time;
    },1000);
}

function difficultyMode(difficulty){

    const gameGrid = document.getElementById('game-grid');
    
    let numberOfCards;
    if (difficulty === 'Easy'){
        numberOfCards = 6; 
    }else if (difficulty === 'Normal') {
        numberOfCards = 12;
    } else if (difficulty === 'Hard') {
        numberOfCards = 24;
    }
    
    for (let i = 1; i <= numberOfCards; i++) {
        const card = document.createElement('div');
        const can =card.getElementsByTagName("canvas");
        card.className = 'game-cell';
        card.setAttribute("id", i);
        
        gameGrid.appendChild(card);
    }
    console.log("The number of cards  "+numberOfCards);
    if (numberOfCards === 6) {
        gameGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (numberOfCards === 12) {
        gameGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (numberOfCards === 24) {
        gameGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }
    return numberOfCards;
}

function cellClicked(card,set){
    setCard = reforgeCard(card);
    
    // console.log("the color of the reforged card "+setCard.color);
    
    // console.log("The inset is " + isInSet(set,setCard));
    if (isInSet(set,setCard) == false && set.length < 3 ){
        set.push(setCard);
        // console.log("here")
    } else if(isInSet(set,setCard)){
        console.log("select another card")
    }
    
    // console.log(set.length);
    let setGrid = document.getElementById('set-grid');
    
    if (set.length == 3) {
        // console.log("Checking cards");
        // console.log(checkIfSet(set[0],set[1],set[2]));
        // console.log("end check")
        if( checkIfSet(set[0],set[1],set[2])) {
            
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
        inSet= inSet || equals(set[i],card);
    }
    // console.log("end of isInSet test");
    return inSet;
}

function reforgeCard(card){
    let forgedCard = createRandomCard();
    forgedCard.color = card.getAttribute("color");
    forgedCard.shape = card.getAttribute("shape");
    forgedCard.shading = card.getAttribute("shading");
    forgedCard.number = card.getAttribute("number");
    // console.log("In reforge func "+forgedCard.color);
    // console.log(equals(forgedCar))
    return forgedCard;
}

function restartGame(){
    window.location.href = 'home.html';
}