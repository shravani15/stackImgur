import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBcbUlow5pA7g-oOIQf2H5--lFThZQRbqA",
    authDomain: "stackimgur.firebaseapp.com",
    databaseURL: "https://stackimgur.firebaseio.com",
    projectId: "stackimgur",
    storageBucket: "stackimgur.appspot.com",
    messagingSenderId: "219195497683",
    appId: "1:219195497683:web:c077afaf85442fdb"
  };
  
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
