import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/'
const firebaseConfig = {
  apiKey: "AIzaSyCcX_VpGkR6I4wAoyMxZWwAt6pGfIkRTzE",
  authDomain: "vuex-tutorial-a131a.firebaseapp.com",
  databaseURL: "https://vuex-tutorial-a131a.firebaseio.com",
  projectId: "vuex-tutorial-a131a",
  storageBucket: "vuex-tutorial-a131a.appspot.com",
  messagingSenderId: "55771917877",
  appId: "1:55771917877:web:aa95e073937ccc003e0b7c",
  measurementId: "G-ENH6Y70Q47"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const dataBase = firebase.database();
// export const setting = db.settings({timestampsInSnapshots: true});
