import { documentDirectory, getInfoAsync, makeDirectoryAsync, downloadAsync } from "expo-file-system"
import { Asset } from "expo-asset"
import { openDatabase } from "expo-sqlite"
import database from "src/api/sqlite/database/qtable.db"

class SQLite {
  constructor() {
    this.db = null
  }

  static load = async () => {
    const { isDirectory } = await getInfoAsync(`${documentDirectory}SQLite`)
    if (!isDirectory) await makeDirectoryAsync(`${documentDirectory}SQLite`)
    await downloadAsync(Asset.fromModule(database).uri, `${documentDirectory}SQLite/qtable.db`)
    this.db = openDatabase("qtable.db")
  }
}

export default SQLite
