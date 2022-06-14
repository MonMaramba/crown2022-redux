import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAuMZKahq5EUJBPhXRHo8y1NKYwKGp33fo',
  authDomain: 'crwn2022.firebaseapp.com',
  projectId: 'crwn2022',
  storageBucket: 'crwn2022.appspot.com',
  messagingSenderId: '654918618246',
  appId: '1:654918618246:web:4de919c728552134231507',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// GoogleAuthProvider is a class from google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
