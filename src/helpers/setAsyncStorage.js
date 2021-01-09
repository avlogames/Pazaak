import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function setAsyncStorage(key, value) {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (err) {
    console.log("Error setting uuid in async storage")
  }
}
