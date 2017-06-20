import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'


const app = firebase.initializeApp({
  apiKey: "YOUR API KEY HERE",
  authDomain: "YOUR-APP.firebaseapp.com",
  databaseURL: "https://YOUR-APP.firebaseio.com",
  projectId: "YOUR PROJECT ID",
  storageBucket: "",
  messagingSenderId: "YOUR SENDER ID"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export default Rebase.createClass(db)