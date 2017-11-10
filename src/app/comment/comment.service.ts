import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Commentaire} from "./Commentaire";

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  create(comment: Commentaire): void {
    if (comment.id === undefined) {
      this.http.post<Commentaire>('api/posts', comment).subscribe();
    } else {
      this.http.patch<Commentaire>(`api/posts/${comment.id}`, comment).subscribe();
    }
  }
  delete(id: number) {
    this.http.delete<Commentaire>(`api/posts/${id}`).subscribe();
  }
  getAll(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`/api/posts`);
  }

  get(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`/api/posts/${id}`);
  }

}
