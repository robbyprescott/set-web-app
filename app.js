/*
@valid values = {
    number: 1, 2, 3
    color: red, green, purple
    shape: oval, diamond, wavy
    pattern: empty, stripe, filled
}
*/
var card = function (number, color, shape, pattern) {
    var card = {
        number: number,
        color: color,
        shape: shape,
        pattern: pattern
    }
    return card;
};

var initializeCard = function(i) {
    var number = initializeNumber(i);
    var color = initializeColor(i);
    var shape = initializeShape(i);
    var pattern = initializePattern(i);
    return card(number, color, shape, pattern);
}

var initializeNumber = function(i){
    var x = i % 3;
    if (x == 0) {
        return '1';
    } else if(x == 1) {
        return '2';
    } else {
        return '3';
    } 
};

var initializePattern = function(i){
    var x = i % 9;
    if (x < 3) {
        return 'empty';
    } if (x < 6) {
        return 'stripe';
    } else {
        return 'filled';
    }
};

var initializeShape = function(i){
    var x = i % 27;
    if (x < 9) {
        return 'oval';
    } if (x < 18) {
        return 'diamond';
    } else {
        return 'wavy';
    }
};

var initializeColor = function(i){
    var x = i % 81;
    if (x < 27) {
        return 'red';
    } else if (x < 54) {
        return 'green';
    } else {
        return 'purple';
    }
};

var initializeDeck = function() {
    var deck = [];
    for(var i = 0; i < 81; i++) {
        deck[i] = initializeCard(i);
    };
    return deck;
};


var swapCards = function(deck, i, j) {
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

// returns a random integer between 0 and x (exclusive upper bound)
var randomInteger = function(x){
    return Math.floor(Math.random() * x);
};

var shuffleDeck = function(deck) {
    for (var i = 0; i < 81; i++) {
        swapCards(deck, i, randomInteger(81));
    }
};

// deals n cards from the deck to the board
var deal = function(deck, board, n) {
   for (var i = 0; i < n; i++){
       board.push(deck.pop());
   } 
}

// game playing logic
var isSet = function(cardA, cardB, cardC) {
    return hasAllSameOrDifferentColor(cardA, cardB, cardC) &&
           hasAllSameOrDifferentNumber(cardA, cardB, cardC) &&
           hasAllSameOrDifferentPattern(cardA, cardB, cardC) &&
           hasAllSameOrDifferentShape(cardA, cardB, cardC);
}

var hasAllSameOrDifferentColor = function(cardA, cardB, cardC) {
    var allSame = cardA.color === cardB.color &&
                  cardB.color === cardC.color;
    
    var allDiff = cardA.color !== cardB.color &&
                  cardB.color !== cardC.color &&
                  cardC.color !== cardA.color;
    
    return allSame || allDiff;
};

var hasAllSameOrDifferentPattern = function(cardA, cardB, cardC) {
    var allSame = cardA.pattern === cardB.pattern &&
                  cardB.pattern === cardC.pattern;
    
    var allDiff = cardA.pattern !== cardB.pattern &&
                  cardB.pattern !== cardC.pattern &&
                  cardC.pattern !== cardA.pattern;
    
    return allSame || allDiff;
};

var hasAllSameOrDifferentShape = function(cardA, cardB, cardC) {
    var allSame = cardA.shape === cardB.shape &&
                  cardB.shape === cardC.shape;
    
    var allDiff = cardA.shape !== cardB.shape &&
                  cardB.shape !== cardC.shape &&
                  cardC.shape !== cardA.shape;
    
    return allSame || allDiff;
};

var hasAllSameOrDifferentNumber = function(cardA, cardB, cardC) {
    var allSame = cardA.number === cardB.number &&
                  cardB.number === cardC.number;
    
    var allDiff = cardA.number !== cardB.number &&
                  cardB.number !== cardC.number &&
                  cardC.number !== cardA.number;
    
    return allSame || allDiff;
};

var set = function (cardA, cardB, cardC) {
    var set = [
        cardA,
        cardB,
        cardC
    ];
    return set;
};

var iterateThroughAllCombos = function(board, sets) {
    var total = board.length;
    for(var i = 0; i < total - 2; i++) {
        cardA = board[i];
        for(var j = i + 1; j < total - 1; j++) {
            cardB = board[j];
            for(var k = j + 1; k < total; k++) {
                cardC = board[k];
                if (isSet(cardA, cardB, cardC)) {
                    sets.push(set(cardA, cardB, cardC));
                }
            }
        }
    }
};

// var card1 = card('1', 'purple', 'oval', 'filled');
// var card2 = card('2', 'purple', 'diamond', 'stripe');
// var card3 = card('3', 'purple', 'wavy', 'empty');

// console.log(isSet(card1, card2, card3));


var deck = initializeDeck();
shuffleDeck(deck);

var board = [];
deal(deck, board, 12);
console.log(board);

var sets = [];

iterateThroughAllCombos(board, sets);
console.log();
console.log(sets);
console.log();
console.log('num sets: ' + Math.round(sets.length));


