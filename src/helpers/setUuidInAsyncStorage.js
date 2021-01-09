import uuid from "uuid-random"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function setUuidInAsyncStorage() {
  try {
    return await AsyncStorage.setItem("uuid", uuid())
  } catch (err) {
    console.log("Error setting uuid in async storage")
  }
}
