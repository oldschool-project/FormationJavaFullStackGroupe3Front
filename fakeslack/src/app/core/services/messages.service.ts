import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private urlApi: string;
  public collection$: BehaviorSubject<Message[]>;

  constructor(private httpClient: HttpClient) {
    this.collection$ = new BehaviorSubject<Message[]>([]);
    this.urlApi = environment.urlApi;

    this.refreshCollection();
  }
  public refreshCollection() {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages`)
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public add(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.urlApi}/messages`, message);
  }
  public getItemById(id: number): Observable<Message> {
    return this.httpClient.get<Message>(`${this.urlApi}/messages/${id}`);
  }

  public update(message: Message): Observable<Message> {
    return this.httpClient.put<Message>(
      `${this.urlApi}/messages/${message.id}`,
      message
    );
  }
  public delete(id: number): Observable<Message> {
    return this.httpClient
      .delete<Message>(`${this.urlApi}/messages/${id}`)
      .pipe(tap(() => this.refreshCollection));
  }
}
