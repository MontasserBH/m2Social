import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list: User[];
  message: string;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAll().subscribe(u => this.list = u );
  }

  onClicked(user: User): void {
    this.message = `vous avez clické sur ${user.firstName} ${user.lastName}`;

}}
