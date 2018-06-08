import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[] = [];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
  this.users = [
      {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      isActive: true,
      registered: new Date('01/02/2018 08:30:00'),
      hide: false
     },
     {
      firstName: 'Adam',
      lastName: 'Jensen',
      email: 'adam@gmail.com',
      isActive: false,
      registered: new Date('03/11/2018 06:20:00'),
      hide: true
    },
    {
        firstName: 'Lara',
        lastName: 'Croft',
        email: 'lara@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:34:00'),
        hide: true
    }
    ];

      this.loaded = true;
    }, 2000);
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  // };
  // }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }
}
