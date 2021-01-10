import { db } from "src/api/firebase"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default async function updateDocument(doc) {
  const code = await getAsyncStorage("code")
  await db.doc(`ROOMS/${code}`).update(doc)
}
