import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  firebaseConfig = {
    apiKey: "AIzaSyD8wVUJ8JaujyPDPwi5Xud-sODEI9qxTd0",
    authDomain: "workouthelper-23812.firebaseapp.com",
    projectId: "workouthelper-23812",
    storageBucket: "workouthelper-23812.appspot.com",
    messagingSenderId: "592920669773",
    appId: "1:592920669773:web:389c41f7efbb5461103604",
    measurementId: "G-F1V7TNWECG"
  };

  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore();

  constructor() {
  }

  getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }


}
