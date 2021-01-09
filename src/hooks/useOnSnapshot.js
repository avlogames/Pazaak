import { useDispatch } from "react-redux"
import { db } from "src/api/firebase"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default async function useOnSnapshot() {
  const dispatch = useDispatch()
  const code = await getAsyncStorage("code")

  db.doc(`ROOMS/${code}`).onSnapshot((doc) => {
    let source = doc.metadata.hasPendingWrites ? "Local" : "Server"
    let data = doc.data()
    dispatch({ type: "hydrate", value: data })
  })
}
