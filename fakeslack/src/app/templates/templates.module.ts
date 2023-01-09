import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';

@NgModule({
  declarations: [TemplateFullWidthComponent, TemplateContainerComponent],
  imports: [CommonModule],
  exports: [TemplateFullWidthComponent, TemplateContainerComponent],
})
export class TemplatesModule {}
