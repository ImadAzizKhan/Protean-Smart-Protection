import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8K85uQrC4ILNqiurvu-OBqgNWYOxI2O8",
  authDomain: "protean-smart-protection.firebaseapp.com",
  databaseURL: "https://protean-smart-protection-default-rtdb.firebaseio.com",
  projectId: "protean-smart-protection",
  storageBucket: "protean-smart-protection.appspot.com",
  messagingSenderId: "534115861665",
  appId: "1:534115861665:web:a9fcccceb3e80ae4fe9ce0",
  measurementId: "G-0D09HCC5RW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;