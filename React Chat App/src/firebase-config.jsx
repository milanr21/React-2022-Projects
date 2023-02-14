import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUbKeGiZT9TSQPWAsv2yJT64s_XiL-It4',
  authDomain: 'fir-chat-app-59505.firebaseapp.com',
  projectId: 'fir-chat-app-59505',
  storageBucket: 'fir-chat-app-59505.appspot.com',
  messagingSenderId: '348905198637',
  appId: '1:348905198637:web:c3d8f23c9a1421bd3914a4',
  measurementId: 'G-Q55PPZG94S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore();
