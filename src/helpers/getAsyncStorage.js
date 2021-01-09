import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function getAsyncStorage(key) {
  try {
    return await AsyncStorage.getItem(key)
  } catch (err) {
    console.log("Error getting uuid in async storage")
  }
}
