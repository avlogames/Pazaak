import getUuidFromAsyncStorage from "src/helpers/getUuidFromAsyncStorage"
import setUuidInAsyncStorage from "src/helpers/setUuidInAsyncStorage"

export default async function useUuid() {
  const currentUuid = await getUuidFromAsyncStorage()
  if (!currentUuid) await setUuidInAsyncStorage()
}
