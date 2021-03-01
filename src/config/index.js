export { default as AUDIO } from "src/config/audio"
export { default as CARDS } from "src/config/cards"
export { default as IMAGES } from "src/config/images"
export { default as FIREBASE } from "src/config/firebase"

export const OFFLINE_ROOM_CODE = "OFFLINE"
export const OFFLINE_OPPONENT = "opponent"
export const PLACEHOLDER = { type: "placeholder", value: 0 }
export const SIDE_DECK_COLLECTION = [-6, -6, -5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
export const QUERY = `SELECT * FROM game_ai WHERE ap_wins IS ? AND nap_wins IS ? AND ap_num_sd_cards IS ? AND num_cards_in_smallest_winning_combo IS ? AND ap_score IS ? AND nap_score IS ?`
