import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setCurrentUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    return onAuthStateChanged(auth, setCurrentUser);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}