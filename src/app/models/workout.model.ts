export class Workout {
  name: String;
  createdBy: String;
  id: String;
  exercises: Array<String>;

  constructor(id: String, createdBy: string, name: String, exercises: Array<String>) {
    this.id = id;
    this.createdBy = createdBy;
    this.name = name;
    this.exercises = exercises;

  }
}
