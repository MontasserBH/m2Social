import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-root',
  templateUrl: './user-root.component.html',
  styleUrls: ['./user-root.component.css']
})
export class UserRootComponent implements OnInit {
  user: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.get(1).subscribe(u => this.user = u);
  }

  create() {
    this.service.create(this.user);
  }
  delete() {
    this.service.delete(this.user.id);
  }

}
