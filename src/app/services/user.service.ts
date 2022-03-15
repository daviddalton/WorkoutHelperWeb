import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createNewUser(email: string, password: string) {
    let auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  signIn(email: string, password: string): User | undefined {
    const auth = getAuth();

    let user = undefined;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        user =  userCredential.user;
        return user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    return user
  }

  signOut() {
    const auth = getAuth();

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

}
