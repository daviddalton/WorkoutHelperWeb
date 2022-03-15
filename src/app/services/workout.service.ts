import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore";
import {firebaseConfig} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Workout} from "../models/workout.model";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore();
  workouts = new BehaviorSubject<Array<Workout>>([]);

  constructor() {
  }

  async getAllWorkouts() {
    let tempList = new Array<Workout>()
    const querySnapshot = await getDocs(collection(this.db, "workouts"));
    querySnapshot.forEach((workout) => {
      tempList.push(new Workout(
        workout.id.toString(),
        workout.data()["createdBy"].toString(),
        workout.data()["name"].toString(),
        workout.data()["exercises"]));
    });
    this.workouts.next(tempList);
  }


}
