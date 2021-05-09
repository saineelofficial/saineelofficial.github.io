import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBrr1tJro0Oxrf_eJ74Ep0ZeLAJBnxxThc",
  authDomain: "disney-clone-c52a6.firebaseapp.com",
  databaseURL: "https://disney-clone-a33d5-default-rtdb.firebaseio.com",
  projectId: "disney-clone-c52a6",
  storageBucket: "disney-clone-c52a6.appspot.com",
  messagingSenderId: "946933352285",
  appId: "1:946933352285:web:43d649b4cb2ab218048ab4",
  measurementId: "G-M7K4XVRPRJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
