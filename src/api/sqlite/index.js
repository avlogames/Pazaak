import { documentDirectory, getInfoAsync, makeDirectoryAsync, downloadAsync } from "expo-file-system"
import { Asset } from "expo-asset"
import { openDatabase } from "expo-sqlite"
import database from "src/api/sqlite/database/aiLogic.db"

class SQLite {
  constructor() {
    this.db = null
  }

  static load = async () => {
    const { isDirectory } = await getInfoAsync(`${documentDirectory}SQLite`)
    if (!isDirectory) await makeDirectoryAsync(`${documentDirectory}SQLite`)
    await downloadAsync(Asset.fromModule(database).uri, `${documentDirectory}SQLite/aiLogic.db`)
    this.db = openDatabase("myDatabaseName.db")
  }
}

export default SQLite
