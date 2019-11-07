import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDAdaMcr026JSCv0N22DPLstePvmJAvYKQ",
  authDomain: "crown-db-783cc.firebaseapp.com",
  databaseURL: "https://crown-db-783cc.firebaseio.com",
  projectId: "crown-db-783cc",
  storageBucket: "crown-db-783cc.appspot.com",
  messagingSenderId: "598453127623",
  appId: "1:598453127623:web:6957d59359c6deabdb31e2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;