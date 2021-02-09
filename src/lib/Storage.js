import AsyncStorage from "@react-native-async-storage/async-storage"

class Storage {
  static get = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch (err) {
      console.log("Error getting uuid in async storage")
    }
  }

  static set = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value)
    } catch (err) {
      console.log("Error setting uuid in async storage")
    }
  }
}

export default Storage
