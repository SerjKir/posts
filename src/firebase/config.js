import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-OMVSQPQ5N0WTFGdaaWt3H7p9-1bQrKo",
    authDomain: "mypostapp-6f397.firebaseapp.com",
    projectId: "mypostapp-6f397",
    storageBucket: "mypostapp-6f397.appspot.com",
    messagingSenderId: "496380502312",
    appId: "1:496380502312:web:e1fea5c73cd532a3a5b01d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);