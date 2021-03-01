import AsyncStorage from "@react-native-async-storage/async-storage"

export async function get(key) {
  try {
    return await AsyncStorage.getItem(key)
  } catch (err) {
    console.log(err)
  }
}

export async function set(key, value) {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (err) {
    console.log(err)
  }
}

export async function remove(key) {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (err) {
    console.log(err)
  }
}
