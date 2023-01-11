import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { urlApi } from 'src/environment/urlApi';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public Messages$!: BehaviorSubject<Message[]>;
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = urlApi.rest + urlApi.urlMessages;
    this.Messages$ = new BehaviorSubject<Message[]>([]);
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<Message[]>(this.urlApi)
      .subscribe((data) => this.Messages$.next(data));
  }

  // GET All
  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.urlApi);
  }

  // GET By ID
  getById(messageId: number): Observable<Message> {
    return this.http.get<Message>(`${this.urlApi}/${messageId}`);
  }

  // POST By Body
  add(message: Message): Observable<Message> {
    return this.http
      .post<Message>(this.urlApi, message)
      .pipe(tap(() => this.refresh()));
  }
  // PUT By Body
  update(message: Message): Observable<Message> {
    return this.http
      .put<Message>(this.urlApi, message)
      .pipe(tap(() => this.refresh()));
  }

  //DELETE By ID
  deletebyId(messageId: number) {
    this.http
      .delete(`${this.urlApi}/${messageId}`)
      .subscribe(() => this.refresh());
  }

  // Other

  //GET By Channel ID
  getByChannelId(channelId: number) {
    return this.http
      .get<Message[]>(`${this.urlApi}/channel/${channelId}`)
      .pipe(tap((data) => this.Messages$.next(data)));
  }

  //POST By Channel ID
  addByChannelId(message: Message, channelId: number) {
    return this.http
      .post<Message>(this.urlApi, message)
      .pipe(tap(() => this.getByChannelId(channelId).subscribe()));
  }

  //PUT By Channel ID
  updateByChannelId(message: Message, channelId: number): Observable<Message> {
    return this.http
      .put<Message>(`${this.urlApi}/${message.id}`, message)
      .pipe(tap(() => this.getByChannelId(channelId).subscribe()));
  }

  //DELETE By Channel ID
  deleteByChannelId(messageId: number, channelId: number) {
    return this.http
      .delete(`${this.urlApi}/${messageId}`)
      .pipe(tap(() => this.getByChannelId(channelId).subscribe()));
  }
}
