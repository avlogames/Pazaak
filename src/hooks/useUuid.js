import uuid from "uuid-random"
import getAsyncStorage from "src/helpers/getAsyncStorage"
import setAsyncStorage from "src/helpers/setAsyncStorage"

export default async function useUuid() {
  const currentUuid = await getAsyncStorage("uuid")
  if (!currentUuid) await setAsyncStorage("uuid", uuid())
}
