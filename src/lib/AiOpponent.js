import SQLite from "src/api/sqlite"
import GameActions from "src/lib/GameActions"
import Pazaak from "src/lib/Pazaak"
import Storage from "src/lib/Storage"
import { OFFLINE_OPPONENT } from "src/ui/config"

class AiOpponent {
  constructor() {
    Storage.get("uuid").then((uuid) => (this.pid = uuid))
  }

  determineMove = async (pazaak, uuid) => {
    const ap_wins = pazaak.players[OFFLINE_OPPONENT].wins
    const nap_wins = pazaak.players[uuid].wins
    const ap_score = pazaak.players[OFFLINE_OPPONENT].score
    const nap_score = pazaak.players[uuid].score
    const ap_sd = pazaak.players[OFFLINE_OPPONENT].sideDeck
    const ap_num_sd_cards = ap_sd.length
    const smallest_combo = Pazaak.smallestCombo(ap_sd, ap_score, nap_score)
    const num_cards_in_smallest_winning_combo = smallest_combo.total === 0 ? 0 : smallest_combo.length

    const action = await this.sqlQuery([
      ap_wins,
      nap_wins,
      ap_num_sd_cards,
      num_cards_in_smallest_winning_combo,
      ap_score,
      nap_score,
    ])

    return action
  }

  sqlQuery = async (queryValues) => {
    const query = `
      SELECT * FROM game_ai
      WHERE ap_wins IS ?
      AND nap_wins IS ? 
      AND ap_num_sd_cards IS ?
      AND num_cards_in_smallest_winning_combo IS ?
      AND ap_score IS ?
      AND nap_score IS ?
      `
    return new Promise((resolve, reject) =>
      SQLite.db.transaction((tx) => {
        tx.executeSql(query, [...queryValues], (_, { rows }) => resolve(rows._array[0].action), reject)
      })
    )
  }
}

export default new AiOpponent()
