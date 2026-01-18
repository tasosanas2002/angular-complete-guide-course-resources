import { Component, Input,computed, input } from '@angular/core'; //Input with capital I is decorator and with small function
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() avatar!: string;
@Input() name!: string;

// avatar = input.required<string>();
// name = input.required<string>();
// imagePath = computed(() => 'assets/users/users/' + this.avatar());


get imagePath() {
  return 'assets/users/users/' + this.avatar;
}
onSelectUser() {
 
}
}
