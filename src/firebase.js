import firebase from 'firebase/app'
import 'firebase/auth'

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
    apiKey: "AIzaSyAat935nTLp-4mpD0WIcwaOYDox2alrMEw",
    authDomain: "auth-production-fcd1c.firebaseapp.com",
    projectId: "auth-production-fcd1c",
    storageBucket: "auth-production-fcd1c.appspot.com",
    messagingSenderId: "13747549085",
    appId: "1:13747549085:web:347f3801c7b693a3427574"
})

export const auth = app.auth()
export default app