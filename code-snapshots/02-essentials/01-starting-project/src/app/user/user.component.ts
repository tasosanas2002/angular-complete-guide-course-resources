import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

for (let i = 0; i < DUMMY_USERS.length; i++) {
  
}const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectedUser = DUMMY_USERS[randomUserIndex];
}
