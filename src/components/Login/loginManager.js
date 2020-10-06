import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeLoginFrameWork = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(GoogleProvider)
    .then(res => {
      const {displayName,email,photoURL} = res.user;
      const signInUser = {
        isLog : true,
        name : displayName,
        email : email,
        photo : photoURL,
        success : true
      }
      return signInUser;
    })
    .catch(err => {
      console.log(err);
    })
  }