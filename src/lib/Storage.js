import AsyncStorage from "@react-native-async-storage/async-storage"

class Storage {
  static get = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch (err) {
      console.log(err)
    }
  }

  static set = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value)
    } catch (err) {
      console.log(err)
    }
  }

  static remove = async (key) => {
    try {
      return await AsyncStorage.removeItem(key)
    } catch (err) {
      console.log(err)
    }
  }
}

export default Storage
