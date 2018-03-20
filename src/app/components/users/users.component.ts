import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
  };
  users: User[];
  showExtended = false;
  loaded = false;
  enableAdd = true;
  showUserForm = false;
  @ViewChild('userForm') form: any;
  data: any;
//
  constructor(private userService: UserService) { }
//
  ngOnInit() {
    this.userService.getData().subscribe( data => {
      console.log(data);
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
 }
 onSubmit({value, valid}: {value: User, valid: boolean}) {
  if (!valid) {
      console.log( 'form is not valid' );
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
  // this.users.unshift(value);
      console.log('Success!' );
      this.form.reset();
    }
  }
}
