

function saveScore (score){
    let scoreCalculation = score; 
    if(checkIfSet == 1){
        scoreCalculation++; 
    } else if (checkIfSet == 0){
        scoreCalculation--; 
    }

    return scoreCalculation; 
}

//players: array of players currently in game
//keys: the keyboard key assigned to each player
//currKey: the key that someone presses, has to be a valid keyboard key from keys array
function scoreKeeping(players, keys, currKey){
    var scoreboard = new Array(players.length).fill(0);

    //I'm assuming we're using the idea that each player is assigned a key to press if they spot a match. (max 6 players too)
    //Example: player 1 presses "w", player 2 presses "o", player 3 presses "d", etc.
    //These would be in array for easier access

    var playerIndex = keys.indexOf(currKey);

    if (playerIndex !== -1) {
        if(checkIfSet == 1){
            scoreboard[playerIndex]++; 
        } else if (checkIfSet == 0){
            scoreboard[playerIndex]--; 
        }
    }
}