import { db } from "src/api/config/firebase"
import { getAsyncStorage } from 'src/ui/helpers/asyncStorage'

export default async function updateDocument(doc) {
  const code = await getAsyncStorage("code")
  await db.doc(`ROOMS/${code}`).update(doc)
}
