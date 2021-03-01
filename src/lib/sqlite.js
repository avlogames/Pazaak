import { documentDirectory, getInfoAsync, makeDirectoryAsync, downloadAsync } from "expo-file-system"
import { Asset } from "expo-asset"
import { openDatabase } from "expo-sqlite"
import database from "src/sqlite.db"

export let db = null

export async function load() {
  const { isDirectory } = await getInfoAsync(`${documentDirectory}SQLite`)
  if (!isDirectory) await makeDirectoryAsync(`${documentDirectory}SQLite`)
  await downloadAsync(Asset.fromModule(database).uri, `${documentDirectory}SQLite/qtable.db`)
  db = openDatabase("qtable.db")
}
