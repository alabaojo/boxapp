import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstname: 'ServiceLolos',
        lastname: 'Rightng',
        email: 'fff@gmail.com',
        isActive: true,
        hide: true,
        registered: new Date('01/03/2018 08:30:02' )
      },
      {
        firstname: '2Thomas',
        lastname: 'Hawking',
        email: 'fff@gmail.com',
        hide: true,
        registered: new Date('01/03/2018 08:30:02' )
      },
      {
        firstname: 'ImportSerrThomas',
        lastname: 'Ridecwking',
        email: 'fff@gmail.com',
        hide: false,
        isActive: false,
        registered: new Date('07/03/1982   04:30:02' )
      },
    ];
   }
   getData() { this.data = new  Observable(observer => {
     setTimeout(() => {
       observer.next(1);
     }, 1000);

     setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next({name: 'brabson'});
    }, 4000);

  });
  console.log( 'Asynch fetcghing user from observable ...');
  return this.data;
   }
  getUsers(): Observable<User[]> {
    console.log( 'Fetcghing user from service ...');
  return of(this.users);
   }
   addUser(user: User) {
    console.log( 'service added a user ...');
    this.users.unshift(user);
  return this.users;
   }
}
