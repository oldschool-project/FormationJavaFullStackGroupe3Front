import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageListMessagesComponent } from './page-list-messages/page-list-messages.component';
import { PageAddMessageComponent } from './page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './page-edit-message/page-edit-message.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageListMessagesComponent,
    PageAddMessageComponent,
    PageEditMessageComponent,
  ],
  imports: [CommonModule, MessagesRoutingModule, SharedModule],
})
export class MessagesModule {}
