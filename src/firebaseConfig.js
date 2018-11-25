import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
var config = {
   apiKey: "AIzaSyD7FcgpJD1CiNSOt5Fh00JftOAYTCOZqmo",
   authDomain: "diyetisyenportal.firebaseapp.com",
   databaseURL: "https://diyetisyenportal.firebaseio.com",
   projectId: "diyetisyenportal",
   storageBucket: "diyetisyenportal.appspot.com",
   messagingSenderId: "1016543048248"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const fbauth = firebase.auth()

// date issue fix according to firebase
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export { db, fbauth }
