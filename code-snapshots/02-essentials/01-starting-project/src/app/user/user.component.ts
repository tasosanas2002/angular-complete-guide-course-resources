import { Component, Input,Output,EventEmitter } from '@angular/core'; //Input with capital I is decorator and with small function
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() userId!: string;
@Input() avatar!: string;
@Input() name!: string;
@Output() select = new EventEmitter<string>();

// avatar = input.required<string>();
// name = input.required<string>();
// imagePath = computed(() => 'assets/users/users/' + this.avatar());


get imagePath() {
  return 'assets/users/users/' + this.avatar;
}
onSelectUser() {
 console.log('UserComponent: clicking user, userId=', this.userId);
 this.select.emit(this.userId)
}
}
