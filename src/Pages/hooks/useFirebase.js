import initializeAuthentication from "../../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        setSuccess(true);
        navigate(location.state?.from || "/");

        // save user info into database
        userInfoSaveDB(user.email, user.displayName, "PUT");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(false);
      })
      .finally(() => setIsLoading(false));
  };

  ///get user name
  const setuserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: `${name}`,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  //create user by email & password
  const createUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess(true);

        // save user info into database
        userInfoSaveDB(email, name, "POST");

        setuserName(name);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(false);
      })
      .finally(() => setIsLoading(false));
  };

  //sing In user with passwod
  const signInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  //sing out user
  const singOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // save user info into database
  const userInfoSaveDB = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://rocky-thicket-50900.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  // get admin
  useEffect(() => {
    fetch(`https://rocky-thicket-50900.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  return {
    user,
    error,
    success,
    isLoading,
    googleSignIn,
    createUser,
    signInUser,
    singOutUser,
    admin,
  };
};

export default useFirebase;
