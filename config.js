import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyBnbgND05UZxE3kbXQU9TwRscFveUBp1h0",
  authDomain: "barter-app-2.firebaseapp.com",
  databaseURL: "https://barter-app-2.firebaseio.com",
  projectId: "barter-app-2",
  storageBucket: "barter-app-2.appspot.com",
  messagingSenderId: "155363268014",
  appId: "1:155363268014:web:b663411232efc0a61de43f"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();