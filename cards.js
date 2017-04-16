// suits are html character entities
var suits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

newCard = function(suit, rank) {
    card = {};
    card.suit = suits[i];
    card.rank = ranks[j];
    if (card.rank == "J" || card.rank == "Q" || card.rank == "K") {
        card.value = 10;
    } else if (card.rank == "A") {
        card.value = "A";
    } else {
        card.value = card.rank;
    }
    card.toString = function() {
        return card.rank + " " + card.suit;
    }
    return card;
}

newDeck = function() {
    deck = [];
    for (i = 0; i < suits.length; i++) {
        for(j = 0; j < ranks.length; j++) {
            deck.push(newCard(i, j));
        }
    }
    return deck;
}