import SQLite from "src/api/sqlite"

const query = `
SELECT * FROM game_ai
WHERE ap_score_gtoet IS ?
AND ap_wins IS 0 AND nap_wins IS ?
AND ap_num_sd_cards IS ?
AND num_cards_in_smallest_winning_combo IS ?
`

function handleSuccess(_, { rows }) {
  const { _array } = rows
  console.log(_array[0].action)
}

function handleError(_, err) {
  console.log("ERROR: ", err)
}

export default function getAllData(aps, apw, apn, swc) {
  return SQLite.db.transaction((tx) => {
    return tx.executeSql(query, [aps, apw, apn, swc], handleSuccess, handleError)
  })
}
