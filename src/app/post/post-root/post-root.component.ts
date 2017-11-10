import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-root',
  templateUrl: './post-root.component.html',
  styleUrls: ['./post-root.component.css']
})
export class PostRootComponent implements OnInit {
  post: Post;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.get(1).subscribe(p => this.post = p);
  }

  create() {
    this.service.create(this.post);
  }
  delete() {
    this.service.delete(this.post.id);
  }

}
