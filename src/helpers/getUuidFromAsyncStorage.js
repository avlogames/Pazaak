import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function getUuidInAsyncStorage() {
  try {
    return await AsyncStorage.getItem("uuid")
  } catch (err) {
    console.log("Error getting uuid in async storage")
  }
}
