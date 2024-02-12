import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth"; // Note: Import GoogleAuthProvider directly
import { getAuth } from "firebase/auth"; // Import getAuth to get the auth instance
import { getStorage } from "firebase/storage";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAEtgD-g5zes_kehLxlUYwIPo57DjybYE",
  authDomain: "disneyplus-f7007.firebaseapp.com",
  projectId: "disneyplus-f7007",
  storageBucket: "disneyplus-f7007.appspot.com",
  messagingSenderId: "956023643708",
  appId: "1:956023643708:web:934286fef554f9af10ad39",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); // Use getAuth to get the auth instance
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
