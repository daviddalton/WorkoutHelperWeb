import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workoutHelperWeb';
  greetingText = 'Welcome';

  user: User | undefined

  constructor(private userService: UserService, private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.user = this.userService.signIn("david@mungomash.com", "testing");
    if (this.user != undefined) {
      this.greetingText = "Welcome, " + this.user.displayName;
      this.changeDetection.detectChanges();
    }
  }

}
