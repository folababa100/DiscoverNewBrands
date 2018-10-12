import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7qQlNQSa0d9OqK2V9Gkb1GKjnFZJZDI8",
  authDomain: "discover-new-brands.firebaseapp.com",
  databaseURL: "https://discover-new-brands.firebaseio.com",
  projectId: "discover-new-brands",
  storageBucket: "discover-new-brands.appspot.com",
  messagingSenderId: "44964674812"
};

firebase.initializeApp(config);

const database = firebase.database()
const storage = firebase.storage()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
const emailAuthProvider = new firebase.auth.EmailAuthProvider()

export { firebase, storage, googleAuthProvider, facebookAuthProvider, emailAuthProvider, database as default };
