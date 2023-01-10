import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageListChannelsComponent } from './page-list-channels/page-list-channels.component';
import { PageAddChannelComponent } from './page-add-channel/page-add-channel.component';


@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageAddChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
