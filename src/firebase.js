import { firebaseConfig } from './config'
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
