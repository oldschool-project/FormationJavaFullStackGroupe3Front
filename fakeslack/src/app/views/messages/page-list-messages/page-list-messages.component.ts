import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
})
export class PageListMessagesComponent {
  public headers: string[];
  public collection$: BehaviorSubject<Message[]>;

  constructor(
    private messagesService: MessagesService,
    private router: Router
  ) {
    this.collection$ = this.messagesService.collection$;

    this.headers = [
      'Action',
      'Numéro du message',
      'Canal',
      'Utilisateur',
      'Message',
      'Date',
    ];
  }

  public goToEdit(id: number) {
    this.router.navigate(['messages', 'edit', id]);
  }
  public deleteMessage(id: number) {
    this.messagesService.delete(id).subscribe();
  }
}
