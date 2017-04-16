var deck;

chooseCard = function() {
    ix = Math.floor(Math.random() * deck.length);
    card = deck[ix];
    deck.splice(ix, 1);
    return card;
}

deal = function() {
    if (deck.length < 3) {
        deck = newDeck();
    } 
    dealer = document.getElementById('dealer-hand');
    you = document.getElementById('your-hand');
    cardsLeft = document.getElementById('cards-remaining');

    dealer.innerHTML = chooseCard().toString();
    you.innerHTML = chooseCard().toString() + " " + chooseCard().toString();
    cardsLeft.innerHTML = "Cards in shoe: " + deck.length;
}

hit = function() {
    deal();
}

stay = function() {
    deal();
}

split = function() {
    deal();
}

double = function() {
    deal();
}

initializeListeners = function() {
    hitBtn = document.getElementById('hit');
    hitBtn.addEventListener('click', hit);

    stayBtn = document.getElementById('stay');
    stayBtn.addEventListener('click', stay);

    splitBtn = document.getElementById('split');
    splitBtn.addEventListener('click', split);

    doubleBtn = document.getElementById('double');
    doubleBtn.addEventListener('click', double);

    window.addEventListener('keypress', function(e) {
        // 'h' hits
        if (e.keyCode == 72 || e.keyCode == 104) {
            hit();
        // 's' stays
        } else if (e.keyCode == 83 || e.keyCode == 115) {
            stay();
        // 'd' doubles down
        } else if (e.keyCode == 68 || e.keyCode == 100) {
            double();
        // 'p' splits
        } else if (e.keyCode == 80 || e.keyCode == 112) {
            split();
        }
    });
}

window.onload = function() {
    initializeListeners();
    deck = newDeck();
    console.log(deck);
    deal();
}