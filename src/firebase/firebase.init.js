// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIT4Ox_-ir-yEUC9H3vVbppRJSibpBCwk",
  authDomain: "fir-authentication-d8c78.firebaseapp.com",
  projectId: "fir-authentication-d8c78",
  storageBucket: "fir-authentication-d8c78.appspot.com",
  messagingSenderId: "372405513895",
  appId: "1:372405513895:web:d347a823c6421261be3582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app