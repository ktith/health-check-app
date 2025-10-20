// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBB4bgMJQQMh_oplT_j6MOCKVzf0RxTF3E',
  authDomain: 'health-check-app-kh.firebaseapp.com',
  projectId: 'health-check-app-kh',
  storageBucket: 'health-check-app-kh.firebasestorage.app',
  messagingSenderId: '1002361794069',
  appId: '1:1002361794069:web:829dcb20351d09d58ce81c',
  measurementId: 'G-GSFQG8TR51'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
