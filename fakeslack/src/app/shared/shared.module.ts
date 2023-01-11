import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { TableLightComponent } from './components/table-light/table-light.component';

@NgModule({
  declarations: [TableLightComponent, BtnComponent, MessageCardComponent],
  imports: [CommonModule, RouterModule, FormsModule, IconsModule],
  exports: [
    TemplatesModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    MessageCardComponent,
    FormsModule,
  ],
})
export class SharedModule {}
