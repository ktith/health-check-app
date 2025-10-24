// import firebase firestore
import db from '@/firebase/init.js'
import { collection, addDoc, doc, getDoc } from 'firebase/firestore'
import request from '@/utils/request'

// Function to add a new patient document to Firestore
export async function addPatients(dataObj) {
  console.log('Adding patient:', dataObj)
  const colRef = collection(db, 'patients')
  const docRef = await addDoc(colRef, dataObj)
  return docRef
  // console.log('Document was created with ID:', docRef.id)
  // this.$router.push({ name: 'PatientList' })
}

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}

export async function fetchPatient(id) {
  if (!id) throw new Error('fetchPatient: id is required')
  const docRef = doc(db, 'patients', id)
  const snap = await getDoc(docRef)
  if (!snap.exists()) {
    return null // or throw an error if you prefer
  }
  console.log('Fetched patient data:', { id: snap.id, ...snap.data() })
  return { id: snap.id, ...snap.data() }
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
