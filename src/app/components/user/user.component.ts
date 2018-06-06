import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  numberSum: number;

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };

    this.foo = true;
    this.hasKids = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['Hello', 'world'];
    this.mixedArray = [true, undefined, 'yo', 4];
    this.myTuple = ['hello', 4, true];

    this.numberSum = this.addNumbers(2, 2);
    console.log(this.numberSum);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
