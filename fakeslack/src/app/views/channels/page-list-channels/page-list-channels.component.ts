import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/chanel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-list-channels',
  templateUrl: './page-list-channels.component.html',
  styleUrls: ['./page-list-channels.component.scss'],
})
export class PageListChannelsComponent {
  public collection$: BehaviorSubject<Channel[]>;
  public headers: string[];

  constructor(
    private channelsService: ChannelsService,
    private router: Router
  ) {
    this.collection$ = this.channelsService.collection$;
    this.headers = ['Action', 'Nom du canal'];
  }
  public goToEdit(id: number) {
    this.router.navigate(['channels', 'edit', id]);
  }
  public deleteChannel(id: number) {
    this.channelsService.delete(id).subscribe();
  }
}
