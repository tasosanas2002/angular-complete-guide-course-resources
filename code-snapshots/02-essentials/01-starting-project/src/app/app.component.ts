import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: { id: string; name: string; avatar: string } | undefined;

  onSelectUser(userId: string) {
    this.selectedUser = this.users.find((u) => u.id === userId);
    console.log('Selected user ID:', userId, 'selectedUser:', this.selectedUser);
  }
}
