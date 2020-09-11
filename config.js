import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCADv0WgqFpUWp-ufIjfZ0C5l5g5wcG4_Q",
    authDomain: "passnotes-82787.firebaseapp.com",
    databaseURL: "https://passnotes-82787.firebaseio.com",
    projectId: "passnotes-82787",
    storageBucket: "passnotes-82787.appspot.com",
    messagingSenderId: "68226431564",
    appId: "1:68226431564:web:3ab66db4c6ef4e9a8292e9"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
