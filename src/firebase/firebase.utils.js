import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAnck4bS_c9pVcHrpDkWAyR3_J-FENsI4Q',
  authDomain: 'crwn-clothing-bf555.firebaseapp.com',
  projectId: 'crwn-clothing-bf555',
  storageBucket: 'crwn-clothing-bf555.appspot.com',
  messagingSenderId: '24491403951',
  appId: '1:24491403951:web:edc95406fa79478583025a',
  measurementId: 'G-09XM86JB13',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
