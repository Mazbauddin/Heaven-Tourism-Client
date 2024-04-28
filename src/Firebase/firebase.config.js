import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-HP0uptfJnEtBZ631Z6hntg12LH9fg04",
  authDomain: "heaven-tourism-management-site.firebaseapp.com",
  projectId: "heaven-tourism-management-site",
  storageBucket: "heaven-tourism-management-site.appspot.com",
  messagingSenderId: "1037209766292",
  appId: "1:1037209766292:web:2c8bd2b177a991979ae781",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
