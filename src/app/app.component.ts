import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  route: string;
  showBack: boolean;

  constructor(private router: Router, location: Location) {
    this.router.events.subscribe((val) => {
      if (location.path() != "") {
        this.route = location.path();
        this.showBack = true;
      } else {
        this.route = "Home";
        this.showBack = false;
      }
    })
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
