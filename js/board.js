
//create board object
function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Moves = [];
    this.player2Moves = [];
    this.gameMoves = [];
    if (randomNumber === 1 ) {
        this.player1Turn = true;
        this.player2Turn = false;  
    } else {
        this.player1Turn = false;
        this.player2Turn = true;
    }
   
    this.turnCount = 0
}


// player move and turn counter function
Game.prototype.move = function(move){
    if (game.turnCount < 9) {
    if (game.player1Turn) {
    this.player1Moves.push(move);
    this.gameMoves.push(move);
    this.player1Turn = false;
    this.player2Turn = true
    this.turnCount ++
    } else {
    this.player2Moves.push(move);
    this.gameMoves.push(move);
    this.player1Turn = true;
    this.player2Turn = false;  
    this.turnCount ++  
    };
    } else {
        alert("game draw");
    };
}

//create new game
var game = new Game("player1", "player2");

