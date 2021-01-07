function getCards() {
  const cards = []
  const allValues = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]
  for (let x = 0; x < 4; x++) {
    const index = Math.floor(Math.random() * allValues.length)
    const value = allValues[index]
    const color = value > 0 ? "blue" : "red"
    allValues.splice(index, 1)
    cards.push({ color, value })
  }
  return cards
}

export default function getSideDeck() {
  return {
    player: getCards(),
    opponent: getCards(),
  }
}
