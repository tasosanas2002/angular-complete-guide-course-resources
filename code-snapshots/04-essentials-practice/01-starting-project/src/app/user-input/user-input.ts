import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../investment-results';

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

  results: any[] = [];

  onSubmit() {
    const investmentData = {
      initialInvestment: +this.enteredInitialValue,
      annualInvestment: +this.enteredAnnualValue,
      expectedReturn: +this.enterExpectedReturn,
      duration: +this.enterDuration
    };

    this.results = calculateInvestmentResults(investmentData);

    console.log('Calculated Results:', this.results);
  }
}
