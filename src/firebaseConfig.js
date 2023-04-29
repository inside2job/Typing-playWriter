import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe3kUdypJHEsEQ4ASWRSWtmyxLoQIptEI",
  authDomain: "typing-playground.firebaseapp.com",
  projectId: "typing-playground",
  storageBucket: "typing-playground.appspot.com",
  messagingSenderId: "130885898042",
  appId: "1:130885898042:web:c20b9c28d7d20b862a8a03",
  measurementId: "G-WJN5R4KNGZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };