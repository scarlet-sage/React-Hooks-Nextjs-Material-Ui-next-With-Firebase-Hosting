/**
 * firebase
 */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    ...process.env.firebase
  });
}

/**
 *
 * @type {firebase.auth.Auth}
 */
const auth = firebase.auth();

/**
 *
 * @type {firebase.firestore.Firestore}
 */
const db = firebase.firestore();

/**
 *
 */
export {auth, db};
