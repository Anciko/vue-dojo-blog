import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAQOH2D3TKNlb3bSBgAgH3ltc0ZvBAY2Lw",
    authDomain: "vue-firebase-88643.firebaseapp.com",
    projectId: "vue-firebase-88643",
    storageBucket: "vue-firebase-88643.appspot.com",
    messagingSenderId: "933900497977",
    appId: "1:933900497977:web:91c909ae7e4013c6fd89e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firedb = getFirestore(app);

const timestamp = serverTimestamp;



export { firedb, timestamp };