import { db } from "src/firebase/firestore"
import { getAsyncStorage } from 'src/client/helpers/asyncStorage'

export default async function updateDocument(doc) {
  const code = await getAsyncStorage("code")
  await db.doc(`ROOMS/${code}`).update(doc)
}
