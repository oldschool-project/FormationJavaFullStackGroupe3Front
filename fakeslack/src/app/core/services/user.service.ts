import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { urlApi } from 'src/environment/urlApi';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public Users$!: BehaviorSubject<User[]>;
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = urlApi.rest + urlApi.urlUsers;
    this.Users$ = new BehaviorSubject<User[]>([]);
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<User[]>(this.urlApi)
      .subscribe((data) => this.Users$.next(data));
  }

  // GET All
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi);
  }

  // GET By ID
  getById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/${userId}`);
  }

  // POST By Body
  add(user: User): Observable<User> {
    return this.http
      .post<User>(this.urlApi, user)
      .pipe(tap(() => this.refresh()));
  }
  // PUT By Body
  update(user: User): Observable<User> {
    return this.http
      .put<User>(this.urlApi, user)
      .pipe(tap(() => this.refresh()));
  }

  //DELETE By ID
  deletebyId(userId: number) {
    this.http
      .delete(`${this.urlApi}/${userId}`)
      .subscribe(() => this.refresh());
  }
}
