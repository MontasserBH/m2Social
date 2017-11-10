import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit() {
  }

}
