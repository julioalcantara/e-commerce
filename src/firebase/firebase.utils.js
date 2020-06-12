import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyoyujkIKm0adu1JXWQTTWCUiDE7s-qgY",
    authDomain: "crwn-db-3bc24.firebaseapp.com",
    databaseURL: "https://crwn-db-3bc24.firebaseio.com",
    projectId: "crwn-db-3bc24",
    storageBucket: "crwn-db-3bc24.appspot.com",
    messagingSenderId: "780236232801",
    appId: "1:780236232801:web:e530f6555cea8493e53220"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
    
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user: ', error.message);
      }
    }
    return userRef;
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
