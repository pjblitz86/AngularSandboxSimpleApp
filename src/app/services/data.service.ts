import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
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
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
