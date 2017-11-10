import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRootComponent } from './user-root/user-root.component';
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {
    path: 'user', component: UserRootComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [UserRootComponent, UserListComponent, UserComponent],
  exports: [UserRootComponent],
  providers: [UserService]
})
export class UserModule { }
