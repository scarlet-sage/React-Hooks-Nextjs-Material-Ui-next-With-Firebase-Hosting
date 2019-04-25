/**
 * firebase
 * 必要なものだけをimportしないとワーニングが出る
 */
import firebase from "firebase/app";
import "firebase/auth";

/**
 * 確認しないと重複エラーでる
 * https://github.com/zeit/next.js/issues/1999
 */
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
 */
export {auth};
