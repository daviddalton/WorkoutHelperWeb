import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  workouts = [
    {
      name: "Core Workout",
      type: "Core"
    },
    {
      name: "Harder Core Workout",
      type: "Core"
    }
  ]

  exercises = [
    {
      name: "Plank",
      type: "Core"
    },
    {
      name: "Russian Twists",
      type: "Core"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {

  }

}
