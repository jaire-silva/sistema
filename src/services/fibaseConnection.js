// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSGOJFjs3maO6L1-GJTEoPPmlcqiUcGlk",
    authDomain: "mangas-3324f.firebaseapp.com",
    projectId: "mangas-3324f",
    storageBucket: "mangas-3324f.appspot.com",
    messagingSenderId: "19533414558",
    appId: "1:19533414558:web:729f4b2002919f4c313b8f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);
const firebaseDb = getFirestore(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);

export {firebaseAuth,firebaseDb,firebaseStorage}