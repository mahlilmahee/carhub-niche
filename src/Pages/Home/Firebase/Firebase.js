import initiatingFirebase from "./firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
// import { formControlLabelClasses } from "@mui/material";

initiatingFirebase();

const useFirebase = () => {
  const [user, setUser] = useState(" ");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  // const [user]=getAuth()

  // console.log(user?.displayName, "I have a great name");
  // console.log(user, "I have a user great heart");
  // console.log(user?.email, "I have a great heart email");

  const emailNewAccount = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserData(email, name, "POST");
        setSuccess(true);
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        // const user = userCredential.user;
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };

  // give access by login
  const emailLogin = (email, password, history, location) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        setSuccess(true);
        const destination = location?.state?.from;
        history.replace(destination);

        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
        setSuccess(false);
      })
      .catch((error) => {
        // An error happened.
        setError("");
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser("");
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {

    try{
       if (user?.email) {
      return fetch(
        `https://carhub-server-side.vercel.app/admins/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        });
    }
    }
    catch(err){
      console.log(err.message)
    }
   
  }, [user]);

  const saveUserData = (email, displayname, method) => {
    const user = { email, displayName: displayname };
    fetch("https://carhub-server-side.vercel.app/registerUsers", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    emailNewAccount,
    emailLogin,
    signOutUser,
    user,
    error,
    loading,
    success,
    admin,
  };
};
export default useFirebase;
