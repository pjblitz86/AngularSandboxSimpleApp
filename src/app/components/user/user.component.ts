import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName = 'John';
  lastName = 'Smith';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };

  // Methods
  constructor() {
    console.log('Hello user...');
    // this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
