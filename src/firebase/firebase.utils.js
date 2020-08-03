import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3TELwqeWUxTUKn5xYc9JpX-pFLf8NF1o",
  authDomain: "crwn-db-28af9.firebaseapp.com",
  databaseURL: "https://crwn-db-28af9.firebaseio.com",
  projectId: "crwn-db-28af9",
  storageBucket: "crwn-db-28af9.appspot.com",
  messagingSenderId: "196263503145",
  appId: "1:196263503145:web:df46ab7c6044f97034c338",
  measurementId: "G-TZBPDXM7JL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
