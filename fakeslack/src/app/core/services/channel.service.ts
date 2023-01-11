import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { urlApi } from 'src/environment/urlApi';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  public Channels$!: BehaviorSubject<Channel[]>;
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = urlApi.rest + urlApi.urlChannels;
    this.Channels$ = new BehaviorSubject<Channel[]>([]);
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<Channel[]>(this.urlApi)
      .subscribe((data) => this.Channels$.next(data));
  }

  // GET All
  getAll(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.urlApi);
  }

  // GET By ID
  getById(channelId: number): Observable<Channel> {
    return this.http.get<Channel>(`${this.urlApi}/${channelId}`);
  }

  // POST By Body
  add(channel: Channel): Observable<Channel> {
    return this.http
      .post<Channel>(this.urlApi, channel)
      .pipe(tap(() => this.refresh()));
  }
  // PUT By Body
  update(channel: Channel): Observable<Channel> {
    return this.http
      .put<Channel>(this.urlApi, channel)
      .pipe(tap(() => this.refresh()));
  }

  //DELETE By ID
  deletebyId(channelId: number) {
    this.http
      .delete(`${this.urlApi}/${channelId}`)
      .subscribe(() => this.refresh());
  }
}
