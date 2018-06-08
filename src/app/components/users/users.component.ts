import { User } from './../../models/User';
import { Component, OnInit, ViewChild } from '@angular/core';


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
  @ViewChild('userForm') form: any;

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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
