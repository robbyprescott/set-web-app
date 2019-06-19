document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById("board-1").src = "../images/red.jpg";

var board = [];
initializeBoardDefaultValues(12);
populateBoard();



function cardClicked(location) {
    var location;
    var card = board[location];
    console.log("location: " + location + ", card: " + card);
}

function initializeBoardDefaultValues(size) {
    for(var i = 1; i <= size; i++) {
        var numAsString;
        if (i < 10) { //zero padding
            numAsString = "0" + (i);
        } else {
            numAsString = "" + (i);
        }
        board[i - 1] = numAsString;
    }
}

function populateBoard() {
    for(var i = 0; i < board.length; i++) {
        var boardSpot = "board-" + board[i];
        var imagePath = "../images/test-numbers/" + board[i] + ".svg";
        document.getElementById(boardSpot).src = imagePath;
    }
}

function updateBoardDiv() { 
    $("#board").load(window.location.href + " #board" );
}

function swapElements(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// returns a random integer between 0 and x (exclusive upper bound)
function randomInteger(x) {
    return Math.floor(Math.random() * x);
}

function shuffleBoard() {
    for (var i = 0; i < board.length; i++) {
        swapElements(board, i, randomInteger(board.length));
    }
    populateBoard(); 
    updateBoardDiv();  
}
