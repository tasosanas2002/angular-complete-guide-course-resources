import { Component } from '@angular/core';
import { UserInput } from "./user-input/user-input";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [UserInput],
})
export class AppComponent {}
