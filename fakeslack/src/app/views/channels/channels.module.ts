import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageListChannelsComponent } from './page-list-channels/page-list-channels.component';
import { PageAddChannelComponent } from './page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './page-edit-channel/page-edit-channel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageAddChannelComponent,
    PageEditChannelComponent,
  ],
  imports: [CommonModule, ChannelsRoutingModule, SharedModule],
})
export class ChannelsModule {}
