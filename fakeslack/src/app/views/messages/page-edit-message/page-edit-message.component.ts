import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-edit-message',
  templateUrl: './page-edit-message.component.html',
  styleUrls: ['./page-edit-message.component.scss'],
})
export class PageEditMessageComponent {
  public form!: FormGroup;
  public id: number;
  public items$: Observable<Message>;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.items$ = this.messagesService.getItemById(this.id).pipe(
      tap((message) => {
        this.form = this.formBuilder.group({
          id: [message.id],
          userId: [message.userId],
          chanelId: [message.chanelId],
          text: [message.text],
          date: [message.date],
        });
      })
    );
  }
  public onSubmit(): void {
    this.messagesService.update(this.form.value).subscribe(() => {
      this.router.navigate(['messages']);
    });
  }
}
