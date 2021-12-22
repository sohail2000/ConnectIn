import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjC41vS2AplOx_cHUhkRyc_NEg-uNwnkk",
    authDomain: "linkedin-clone-41827.firebaseapp.com",
    projectId: "linkedin-clone-41827",
    storageBucket: "linkedin-clone-41827.appspot.com",
    messagingSenderId: "401237451958",
    appId: "1:401237451958:web:e7416dbe59d1e7409e7217"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;