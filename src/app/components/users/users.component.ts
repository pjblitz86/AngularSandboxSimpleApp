import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean;
  currentClass = {};

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
  this.users = [
      {
      firstName: 'John',
      lastName: 'Doe',
      age: 70,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      },
      image: 'http://lorempixel.com/600/600/people/3',
      isActive: true
     },
     {
      firstName: 'Adam',
      lastName: 'Jensen',
      age: 34,
      address: {
        street: '20 Deus ex Main st',
        city: 'Prague',
        state: 'Czech Republic'
      },
      image: 'http://lorempixel.com/600/600/people/2',
      isActive: false
    },
    {
        firstName: 'Lara',
        lastName: 'Croft',
        age: 24,
        address: {
          street: '24 London st',
          city: 'London',
          state: 'UK'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
    }
    ];

    // this.addUser(
    //   {
    //     firstName: 'Neo',
    //     lastName: 'The One',
    //     age: 36,
    //     address: {
    //       street: '14 Future st',
    //       city: 'Underground',
    //       state: 'Matrix'
    //     }
    //   }
    // );

      this.loaded = true;
    }, 2000);

    this.showExtended = true;
    this.setCurrentClasses();

  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClass = {
      'btn-success': this.enableAdd = true,
      'big-text': this.showExtended,
    };
  }

}
