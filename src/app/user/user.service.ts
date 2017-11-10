import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: User): void {
    if (user.id === undefined) {
      this.http.post<User>('api/users', user).subscribe();
    } else {
      this.http.patch<User>(`api/users/${user.id}`, user).subscribe();
    }
  }
  delete(id: number) {
    this.http.delete<User>(`api/users/${id}`).subscribe();
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/api/users`);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }

}
