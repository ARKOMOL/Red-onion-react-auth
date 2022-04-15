// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5_Jgh2nUpCpCTygYiIU116C6r-VEJ0Go",
  authDomain: "onion-project-c8ca9.firebaseapp.com",
  projectId: "onion-project-c8ca9",
  storageBucket: "onion-project-c8ca9.appspot.com",
  messagingSenderId: "383586441323",
  appId: "1:383586441323:web:df947044bb8e24d86d392e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;