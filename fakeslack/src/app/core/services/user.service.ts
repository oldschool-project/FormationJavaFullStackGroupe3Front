import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlApi: string;
  public collection$: Observable<User[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<User[]>(`${this.urlApi}/users`);
  }

  // update user
  public update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.urlApi}/users/${user.id}`, user);
  }

  // add user
  public add(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.urlApi}/users`, user);
  }
}
