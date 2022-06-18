import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase.utils';

// as actual value you want o access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider - the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
