// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_TA_1ZyjE3aOMTtNhTvlW1vbk0ePCfTQ",
  authDomain: "todoproject-50d5c.firebaseapp.com",
  projectId: "todoproject-50d5c",
  storageBucket: "todoproject-50d5c.firebasestorage.app",
  messagingSenderId: "230868881912",
  appId: "1:230868881912:web:07739e16740ae7fda4860d",
  measurementId: "G-94TVK12LK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
