import { Injectable } from '@angular/core';
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../environments/environment";
import {getAnalytics} from "firebase/analytics";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {BehaviorSubject} from "rxjs";
import {Exercise} from "../models/exercise.model";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore();
  exercises = new BehaviorSubject<Array<Exercise>>([]);

  constructor() { }

  async getAllExercises() {
    let tempList = new Array<Exercise>()
    const querySnapshot = await getDocs(collection(this.db, "exercises"));
    querySnapshot.forEach((exercise) => {
      tempList.push(new Exercise(
        exercise.id.toString(),
        exercise.data()["createdBy"],
        exercise.data()["name"],
        exercise.data()["duration"],
        exercise.data()["prepDuration"],
        exercise.data()["type"]));
    });
    this.exercises.next(tempList);
  }
}
