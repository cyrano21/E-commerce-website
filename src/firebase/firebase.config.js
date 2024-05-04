// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcCh6YtKjGVDFqasfysvGWACLHeZ8LtGI",
  authDomain: "e-commerce-website-a1656.firebaseapp.com",
  projectId: "e-commerce-website-a1656",
  storageBucket: "e-commerce-website-a1656.appspot.com",
  messagingSenderId: "681448933251",
  appId: "1:681448933251:web:1f1da30fd03dc4edb318b6",
  measurementId: "G-34KYEZQFKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);