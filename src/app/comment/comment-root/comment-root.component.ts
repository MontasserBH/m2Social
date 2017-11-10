import { Component, OnInit } from '@angular/core';
import {CommentService} from "../comment.service";
import {Commentaire} from "../Commentaire";

@Component({
  selector: 'app-comment-root',
  templateUrl: './comment-root.component.html',
  styleUrls: ['./comment-root.component.css']
})
export class CommentRootComponent implements OnInit {
  comment: Commentaire;

  constructor(private service: CommentService) { }

  ngOnInit() {
    this.service.get(1).subscribe(p => this.comment = p);
  }

  create() {
    this.service.create(this.comment);
  }
  delete() {
    this.service.delete(this.comment.id);
  }

}
