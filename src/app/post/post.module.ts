import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRootComponent } from './post-root/post-root.component';
import {PostService} from "./post.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [PostRootComponent, PostListComponent],
  exports: [PostRootComponent],
  providers: [PostService]
})
export class PostModule { }
