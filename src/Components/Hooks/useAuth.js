import { useEffect, useState } from 'react';

export const useAuth = authFirebase => {
  const [authentication, setAuthentication] = useState(null);

  const provider = new authFirebase.GoogleAuthProvider();
  const auth = authFirebase();

  const logIn = () => auth.signInWithPopup(provider);
  const logOut = () => auth.signOut()
    .catch(err => console.error(err))

  useEffect(() => auth.onAuthStateChanged(user => user ? setAuthentication(user) : setAuthentication(null)), [auth]);

  return { authentication, logIn, logOut };
}
