import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC33enqwd0B8ZLFgIf1h_nxuKWJjUbTNM4",
    authDomain: "booksanta-8870a.firebaseapp.com",
    databaseURL: "https://booksanta-8870a.firebaseio.com",
    projectId: "booksanta-8870a",
    storageBucket: "booksanta-8870a.appspot.com",
    messagingSenderId: "694254490790",
    appId: "1:694254490790:web:b89e512951bd39d0e81067"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
