import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-add-message',
  templateUrl: './page-add-message.component.html',
  styleUrls: ['./page-add-message.component.scss'],
})
export class PageAddMessageComponent {
  public message: Message;
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private router: Router
  ) {
    this.message = new Message();

    this.form = this.formBuilder.group({
      id: [this.message.id],
      chanelId: [this.message.chanelId],
      userId: [this.message.userId],
      text: [this.message.text],
      date: [this.message.date],
    });
  }
  public onSubmit() {
    this.messagesService.add(this.form.value).subscribe(() => {
      this.router.navigate(['messages']);
    });
  }
}
