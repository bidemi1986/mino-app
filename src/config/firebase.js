import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCoo3jNsG5mbBC_vuMv7x5VwSDH_K9a6j0",
    authDomain: "chat-demo-28dcc.firebaseapp.com",
    databaseURL: "https://chat-demo-28dcc.firebaseio.com",
    projectId: "chat-demo-28dcc",
    storageBucket: "chat-demo-28dcc.appspot.com",
    messagingSenderId: "465541919784"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings(settings);

export default firebase;