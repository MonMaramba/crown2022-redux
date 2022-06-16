import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// instantiating firestore to access database
export const db = getFirestore();
// CRUD on Firestore

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // if user data does not exist
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }
  // if user data exists
  // return userDocRef
  return userDocRef;
};
