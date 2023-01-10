import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Channel } from '../models/chanel';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private urlApi: string;
  public collection$: BehaviorSubject<Channel[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    //this.collection$ = this.httpClient.get<Channel[]>(`${this.urlApi}/chanels`);
    this.collection$ = new BehaviorSubject<Channel[]>([]);

    this.refreshCollection();
  }
  public refreshCollection() {
    this.httpClient
      .get<Channel[]>(`${this.urlApi}/channels`)
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }
  public getItemById(id: number): Observable<Channel> {
    return this.httpClient.get<Channel>(`${this.urlApi}/channels/${id}`);
  }
  public add(channel: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, channel);
  }

  public update(channel: Channel): Observable<Channel> {
    return this.httpClient.put<Channel>(
      `${this.urlApi}/channels/${channel.id}`,
      channel
    );
  }
  public delete(id: number): Observable<Channel> {
    return this.httpClient
      .delete<Channel>(`${this.urlApi}/channels/${id}`)
      .pipe(tap(() => this.refreshCollection));
  }
}
