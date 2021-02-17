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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user: ', e.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, documents) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  documents.forEach((document) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, document);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
