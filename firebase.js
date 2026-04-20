import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtahsTkJNIHFbKUiSxlnnwtshYGMJ1IZw",
  authDomain: "irontrack-239df.firebaseapp.com",
  projectId: "irontrack-239df",
  storageBucket: "irontrack-239df.appspot.com",
  messagingSenderId: "1026386493615",
  appId: "1:1026386493615:web:a4661798bdd92bead6945a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);