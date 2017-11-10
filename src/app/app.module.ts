import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostModule} from "./post/post.module";
import {UserModule} from "./user/user.module";
import {CommentModule} from "./comment/comment.module";
import {RouterModule, Routes} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    UserModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
