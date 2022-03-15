import { Component, OnInit } from '@angular/core';
import {WorkoutService} from "../../services/workout.service";
import {Workout} from "../../models/workout.model";
import {Exercise} from "../../models/exercise.model";
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  workouts: Array<Workout> = []
  exercises: Array<Exercise> = []

  constructor(private workoutService: WorkoutService, private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.workoutService.getAllWorkouts();
    this.exerciseService.getAllExercises();
    this.workoutService.workouts.subscribe(_ => {
      this.workouts = _;
    })
    this.exerciseService.exercises.subscribe(_ => {
      this.exercises = _;
    })
  }

  getExerciseName(id: String): String {
    const index = this.exercises.findIndex(exercise => exercise.id === id);
    return this.exercises[index].name
  }

}
