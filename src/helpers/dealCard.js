export default function dealCard() {
  const cardPile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const value = Math.floor(Math.random() * cardPile.length) + 1
  return { type: "green", value }
}
