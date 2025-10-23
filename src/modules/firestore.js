import { query, collection, getDocs } from 'firebase/firestore'
import db from '@/firebase/init.js'

export const getDocsByCollection = async function(collect) {
  const data = []
  // query to get all docs in 'countries' collection
  const querySnap = await getDocs(query(collection(db, collect)))
  // add each doc to 'countries' array
  querySnap.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}

