import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

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

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({name: 'paul'});
      }, 4000);
    });
    return this.data;
  }
}
