
// win moves track array
let winnerMoves = [[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]];

let randomNumber = Math.floor(Math.random() * 2) + 1  
//open web site hide board
$(document).on('ready',function () {
    $('#board').hide();
    $('#finish').hide();
});

//click start button, hide start page show game board
$('.button').on('click', function(){
    $('#start').hide();
    $('#board').show();
    
    if (randomNumber === 1 ) {
        $('#player1').addClass("active");
        $('#finish').hide();
        $('#player1').addClass("players");
        $('#player2').addClass("players");
    } else {
        $('#player2').addClass("active");
        $('#finish').hide();
        $('#player1').addClass("players");
        $('#player2').addClass("players");
    }
   
});


// mouse hover on game board show player icon on the box
$(".box").mouseenter(function(e){
    let hoverBoxId = e.target.id;
    let hoverNumber = parseFloat(hoverBoxId);
    let resultHover = game.gameMoves.indexOf(hoverNumber);
        if (game.player1Turn && resultHover === -1){
            $(this).css("background-image", "url(../img/o.svg)")
        };  
        if (game.player2Turn && resultHover === -1) {
            $(this).css("background-image", "url(../img/x.svg)") 
        };
})

$(".box").mouseleave(function(){
    if (game.player1Turn){
        $(this).css("background-image", "")
    }  else {
        $(this).css("background-image", "")  
    }
})
    

//control game board moves, create player arrays, compare player arrays to winer & tie moves
$('.box').on('click',function (e) {
    
    let clickedBox = $(this).attr('id');
    let boxNumber = parseFloat(clickedBox)
    let clickedBoxId = e.target.id;
    let clickNumber = parseFloat(clickedBoxId);
    let result = game.gameMoves.indexOf(clickNumber)
        if (game.player1Turn && result === -1){
            $('#player1').removeClass("active");
            $('#player2').addClass("active");
            $(this).addClass("box-filled-1");
            game.move(boxNumber);
                for (i=0; i<winnerMoves.length;i ++){
                    var common1 = $.grep(game.player1Moves, function(element)
                    {
                    return $.inArray(element, winnerMoves[i] ) !== -1;
                    });
                        let toplam1 = common1.length;
                        console.log (toplam1);
                            if (toplam1 === 3) {
                                $('#board').hide();
                                $('#finish').show();
                                $('.screen').addClass("screen-win-one")
                                $('.message').html("Winner");
                            }
                            if (game.turnCount === 9 && toplam1 !=3   ) {  
                                $('#board').hide();
                                $('#finish').show();
                                $('.screen').addClass("screen-win-tie")
                                $('.message').html("It's Draw");
                            }
                }
        }
        else if(game.player2Turn && result === -1)
        {
            
            $('#player2').removeClass("active");
            $('#player1').addClass("active");
            $(this).addClass("box-filled-2");
            game.move(boxNumber); 
                for (i=0; i<winnerMoves.length; i++){
                    var common2 = $.grep(game.player2Moves, function(element){
                    return $.inArray(element, winnerMoves[i] ) !== -1;
                    });
                        let toplam2 = common2.length;
                        console.log(toplam2);
                            if (toplam2 === 3) {
                                $('#board').hide();
                                $('#finish').show();
                                $('.screen').addClass("screen-win-two")
                                $('.message').html("Winner");
                            }
                            if (game.turnCount === 9 && toplam2!=3  ) {
                                
                                $('#board').hide();
                                $('#finish').show();
                                $('.screen').addClass("screen-win-tie")
                                $('.message').html("It's Draw");
                            }
                }
        }
        
       
})

// start new game when win some one or draw
$('#newgame').on('click', function () {
    $('#board').hide();
    $('#finish').hide();
    $('#start').show();
    location.reload();
})
