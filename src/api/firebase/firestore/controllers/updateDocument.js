import { db } from "src/api/firebase"
import Storage from 'src/lib/Storage'

export default async function updateDocument(doc) {
  const code = await Storage.get("code")
  await db.doc(`ROOMS/${code}`).update(doc)
}
