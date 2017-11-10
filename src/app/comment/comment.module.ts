import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRootComponent } from './comment-root/comment-root.component';
import {CommentService} from "./comment.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CommentRootComponent, CommentListComponent],
  exports: [CommentRootComponent],
  providers: [CommentService]
})
export class CommentModule { }
