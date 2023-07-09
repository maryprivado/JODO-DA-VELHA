var currentPlayer = "X";
var gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
];
 function makeMove(row, col){
    if (gameBoard[row][col] === ""){
        gameBoard[row][col] = currentPlayer;
        var cell = document.getElementById("cell")[row *3 + col];
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer);
        checkWin();
        currentPlayer = currentPlayer ==="X" ? "O" : "X";
    }
 }
 function checkWin(){
    //verifica todas as possibilidades de vitoria
    var winningCombinatinos =[
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,1], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]],
    ];
    
    for(var i = 0; i < winningCombinatinos.length; i++){
    var combination = winningCombinatinos[i];
    var a = combination[0];
    var b = combination[1];
    var c = combination[2]
    if (
        gameBoard[a[0]][a[1]] === currentPlayer &&
        gameBoard[b[0]][b[1]] === currentPlayer &&
        gameBoard[c[0]][c[1]] === currentPlayer
    ){
        document.getElementById("game").classList.add("game-over");
        alert("Jogador" + currentPlayer + "venceu!");
        return;
     }
    }
 //verica se deu empate
    var isDraw = true;
    for (var row = 0; row < gameBoard.length; row++){
        for (var col = 0; col < gameBoard[row].length; col++){
            if (gameBoard[row][col] === ""){
                isDraw = false;
                break
            }
        }
     }
    if (isDraw){
        document.getElementById("game").classList.add("game-over");
        alert("empate!!");
    }
}

function resetGame(){
    currentPlayer = "X";
    gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    var cells = document.getElementByIdClassName("cell");
    for (var i = 0 < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].classList.remove("x", "O");
    }
    document.getElementById("game").classList.remove("game-over");
 }