// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBJ2eR1s5BZnm7HDd4sT1-FJPplJjE55-Q",
    authDomain: "example-d83d8.firebaseapp.com",
    databaseURL: "https://example-d83d8-default-rtdb.firebaseio.com",
    projectId: "example-d83d8",
    storageBucket: "example-d83d8.firebasestorage.app",
    messagingSenderId: "550182452599",
    appId: "1:550182452599:web:af506a5048b388da59b572"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, update, remove, get, onValue} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

export const db = getDatabase()
