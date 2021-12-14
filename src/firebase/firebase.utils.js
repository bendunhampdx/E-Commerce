import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
  apiKey: "AIzaSyD3mLGqhQDZkMONQFovLFrTIwLs6alfhvg",
  authDomain: "e-commerce-9f5f1.firebaseapp.com",
  projectId: "e-commerce-9f5f1",
  storageBucket: "e-commerce-9f5f1.appspot.com",
  messagingSenderId: "858129018512",
  appId: "1:858129018512:web:dfcfbad474edffc018b215"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;