import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAl6VEqlN9jNBQM5Zzt__usOa_j4H7l7Yk',
  authDomain: 'personal-602ae.firebaseapp.com',
  projectId: 'personal-602ae',
  storageBucket: 'personal-602ae.appspot.com',
  messagingSenderId: '406489345930',
  appId: '1:406489345930:web:ca10585ff34d06c2606273',
}

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
