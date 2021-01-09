const cardPile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function dealCard() {
  const value = Math.floor(Math.random() * cardPile.length)
  return { type: "green", value }
}
