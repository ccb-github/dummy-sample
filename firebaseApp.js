import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import keys from './src/key/apiKey' // Can not use dstruct with default ?


firebase.initializeApp(keys.firebaseConfig)


export default firebase