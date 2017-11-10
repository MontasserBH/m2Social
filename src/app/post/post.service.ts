import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./post";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  create(post: Post): void {
    if (post.id === undefined) {
      this.http.post<Post>('api/posts', post).subscribe();
    } else {
      this.http.patch<Post>(`api/posts/${post.id}`, post).subscribe();
    }
  }
  delete(id: number) {
    this.http.delete<Post>(`api/posts/${id}`).subscribe();
  }
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`/api/posts`);
  }

  get(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

}
