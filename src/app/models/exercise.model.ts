export class Exercise {
  name: String;
  createdBy: String;
  id: String;
  duration: Number;
  prepDuration: Number;
  type: String;

  constructor(id: String, createdBy: string, name: String, duration: Number, prepDuration: Number, type: String) {
    this.id = id;
    this.createdBy = createdBy;
    this.name = name;
    this.duration = duration;
    this.prepDuration = prepDuration;
    this.type = type;
  }
}
