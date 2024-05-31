/* 
Adds player to the list of players 
*/
function addToPlayerList(player, players){
    players.push(player);
}
class Player {
    constructor(playerNum) {
        this.player = playerNum;
        this.setFound = [];
        this.score = 0;
        this.correct = 0; // in case we want to add statistics for correctness/
        this.incorrect = 0;


    }
}
/*
The list of players is cleared.
*/
function resetPlayers(players){
    while (players.length>0){
        players.pop;
        }
        console.log("Emptied list")
}
/*
Adds the set found to the player's setfound list
*/
function addSetToPlayer(player, set ){
    player.setFound.push(set);
    console.log("The player has found a total number of sets of "+player.setFound.length);
}
/*
May not be needed but 
*/
function resetPlayer(player){
    player.setFound =[];
    player.score=0;
    player.correct=0;
    player.incorrect=0;
}


//functions for the score and correct can be used from saveScore.js