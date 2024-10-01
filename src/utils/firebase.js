// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdC2URY00M_uPnk2UAJdu7tFx8o_nKfZ0",
  authDomain: "netflix-gpt-334c1.firebaseapp.com",
  projectId: "netflix-gpt-334c1",
  storageBucket: "netflix-gpt-334c1.appspot.com",
  messagingSenderId: "1029282549773",
  appId: "1:1029282549773:web:9c8be21883ba3896174544",
  measurementId: "G-PS7R16GQ0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();