import { getRedirectResult } from 'firebase/auth';
import React, { useEffect } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from '../../utils/firebase.utils';

const SignIn = () => {
  useEffect(() => {
    async function _getRedirectResult() {
      const response = await getRedirectResult(auth);
      console.log(response);
    }
    _getRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
