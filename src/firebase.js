import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth"; // Note: Import GoogleAuthProvider directly
import { getAuth } from "firebase/auth"; // Import getAuth to get the auth instance
import { getStorage } from "firebase/storage";

import {
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore/lite";

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.tit);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "collections");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { tit, movies } = docSnapshot.data();
    acc[tit] = movies;
    return acc;
  }, {});

  return categoryMap;
};

export { auth, provider, storage };
export default db;
