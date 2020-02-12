import firebase from 'firebase';
import ENV from "../../env.json";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PRJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID,
    measurementId: ENV.FIREBASE_MM_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase
