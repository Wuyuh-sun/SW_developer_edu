import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/app";
import "firebase/storage";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8pbkQUK4vE_qFsn7xk0juTqYJxTa_FMk",
  authDomain: "study8253.firebaseapp.com",
  projectId: "study8253",
  storageBucket: "study8253.appspot.com",
  messagingSenderId: "240142884948",
  appId: "1:240142884948:web:9a168fdb7770bf86f60dc1"
};

// Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();