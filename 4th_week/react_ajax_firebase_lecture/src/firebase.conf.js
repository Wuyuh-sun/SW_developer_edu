import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-4oJNszMz3TAsfGPU5X8GDRytUdFu2PY",
  authDomain: "react-prac-1b3a1.firebaseapp.com",
  projectId: "react-prac-1b3a1",
  storageBucket: "react-prac-1b3a1.appspot.com",
  messagingSenderId: "464705170113",
  appId: "1:464705170113:web:d3fcf8db3e4118b839c240"
};

//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();