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
  showUserForm: boolean = false;

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
      isActive: true,
      registered: new Date('01/02/2018 08:30:00'),
      hide: false
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
      isActive: false,
      registered: new Date('03/11/2018 06:20:00'),
      hide: true
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
        isActive: true,
        registered: new Date('11/02/2016 10:34:00'),
        hide: true
    }
    ];

      this.loaded = true;
      this.enableAdd = true;
    }, 2000);

    this.showExtended = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }

}
