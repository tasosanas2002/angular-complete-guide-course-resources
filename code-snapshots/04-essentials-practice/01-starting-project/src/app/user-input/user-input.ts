import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialValue = '0';
  enteredAnnualValue = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';
onSubmit() {
console.log('Form submitted!');
console.log('Initial Investment:', this.enteredInitialValue);
console.log('Annual Contribution:', this.enteredAnnualValue);
console.log('Expected Return:', this.enterExpectedReturn);
console.log('Duration:', this.enterDuration);
  }
}
