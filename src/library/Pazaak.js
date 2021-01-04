class Cards {
  constructor(playerOneSideDeck, playerTwoSideDeck) {
    this._cardsOnTable = []
    this._pileOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this._playerOneSideDeck = this._pickFourRandomCards(playerOneSideDeck)
    this._playerTwoSideDeck = this._pickFourRandomCards(playerTwoSideDeck)
  }

  get cardsOnTable() {
    return this._cardsOnTable
  }

  get playerOneSideDeck() {
    return this._playerOneSideDeck
  }

  get playerTwoSideDeck() {
    return this._playerTwoSideDeck
  }

  _pickFourRandomCards(array) {
    return array.sort(() => 0.5 - Math.random()).slice(0, 4)
  }

  dealCardFromPile() {
    const randomCard = Math.floor(Math.random() * this._pileOfCards.length)
    return this._cardsOnTable.push(randomCard)
  }

  playerOnePlayCardFromSideDeck(index) {
    this._cardsOnTable.push(this._playerOneSideDeck[index])
    return (this._playerOneSideDeck[index] = null)
  }

  playerTwoPlayCardFromSideDeck(index) {
    this._cardsOnTable.push(this._playerTwoSideDeck[index])
    return (this._playerTwoSideDeck[index] = null)
  }

  clearCardsOffTable() {
    return (this._cardsOnTable = [])
  }
}

class Pazaak extends Cards {
  constructor(playerOneSideDeck, playerTwoSideDeck) {
    super(playerOneSideDeck, playerTwoSideDeck)
    this.activePlayer = 1

    // Player 1
    this.playerOneHandScore = 0
    this.playerOneGameScroe = 0

    // Player 2
    this.playerTwoHandScore = 0
    this.playerTwoGameScore = 0
    this.startGame()
  }

  startGame() {
    this.dealCardFromPile()
    console.log("Current cards on table: ", this.cardsOnTable)
    this.checkForTwenty()
    this.dealCardFromPile()
    console.log("Current cards on table: ", this.cardsOnTable)
    this.checkForTwenty()
    this.dealCardFromPile()
    console.log("Current cards on table: ", this.cardsOnTable)
    this.checkForTwenty()
    this.dealCardFromPile()
    console.log("Current cards on table: ", this.cardsOnTable)
    this.checkForTwenty()
  }

  checkForTwenty() {
    const total = this.cardsOnTable.reduce((a, v) => (a += v), 0)
    if (total === 20) {
      return console.log("YES! Score:", total)
    }
    return console.log("No! Score:", total)
  }
}

const playerOneSideDeck = [4, -3, -1, 2, -7, -4, 5]
const playerTwoSideDeck = [-2, 2, -2, 1, 5, -5, 7]

const pazaak = new Pazaak(playerOneSideDeck, playerTwoSideDeck)

