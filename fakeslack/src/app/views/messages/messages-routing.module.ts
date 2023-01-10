import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddMessageComponent } from './page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './page-edit-message/page-edit-message.component';
import { PageListMessagesComponent } from './page-list-messages/page-list-messages.component';

const routes: Routes = [
  { path: '', component: PageListMessagesComponent },
  { path: 'add', component: PageAddMessageComponent },
  { path: 'edit/:id', component: PageEditMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
