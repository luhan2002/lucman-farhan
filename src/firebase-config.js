import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbvAR5HBmjqUeSPQggRdGYgCBLIYT2Ypw",
    authDomain: "fir-tutorial-2e36d.firebaseapp.com",
    projectId: "fir-tutorial-2e36d",
    storageBucket: "fir-tutorial-2e36d.appspot.com",
    messagingSenderId: "190055495101",
    appId: "1:190055495101:web:ee42eb4e9cc5fa5f40ced4",
    measurementId: "G-QM06G57WP9"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);