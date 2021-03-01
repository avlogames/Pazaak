import SQLite from "src/api/sqlite"
import Pazaak from "src/lib/Pazaak"
import { OFFLINE_OPPONENT, QUERY } from "src/config"

/**
 * Query Database
 */
async function queryDatabase(queryValues) {
  return new Promise((resolve, reject) => {
    SQLite.db.transaction((tx) => {
      tx.executeSql(QUERY, [...queryValues], (_, { rows }) => resolve(rows._array[0].action), reject)
    })
  })
}

/**
 * Determine AI Move
 */
export async function determineMove(pazaak, uuid) {
  const ap_wins = pazaak.players[OFFLINE_OPPONENT].wins
  const nap_wins = pazaak.players[uuid].wins
  const ap_score = pazaak.players[OFFLINE_OPPONENT].score
  const nap_score = pazaak.players[uuid].score
  const ap_sd = pazaak.players[OFFLINE_OPPONENT].sideDeck
  const ap_num_sd_cards = ap_sd.length
  const smallest_combo = Pazaak.smallestCombo(ap_sd, ap_score, nap_score)
  const num_cards_in_smallest_winning_combo = smallest_combo.total === 0 ? 0 : smallest_combo.length

  const action = await queryDatabase([
    ap_wins,
    nap_wins,
    ap_num_sd_cards,
    num_cards_in_smallest_winning_combo,
    ap_score,
    nap_score,
  ])

  return [action, smallest_combo]
}
