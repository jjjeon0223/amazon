import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFuVY5IGWQQ4xIz_9tHelvO9xKAvnD1Qc",
  authDomain: "fir-1ad8d.firebaseapp.com",
  projectId: "fir-1ad8d",
  storageBucket: "fir-1ad8d.appspot.com",
  messagingSenderId: "687600650989",
  appId: "1:687600650989:web:425a74ace71b511be2dae4",
  measurementId: "G-2D20J6V0WS",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
