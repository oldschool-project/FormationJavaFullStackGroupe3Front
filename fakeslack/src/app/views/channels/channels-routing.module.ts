import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddChannelComponent } from './page-add-channel/page-add-channel.component';
import { PageListChannelsComponent } from './page-list-channels/page-list-channels.component';
import { PageEditChannelComponent } from './page-edit-channel/page-edit-channel.component';

const routes: Routes = [
  { path: '', component: PageListChannelsComponent },
  { path: 'add', component: PageAddChannelComponent },
  { path: 'edit/:id', component: PageEditChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
