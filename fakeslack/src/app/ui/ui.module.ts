import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, WorkspaceComponent],
  imports: [CommonModule],
  exports: [HomeComponent, LoginComponent, WorkspaceComponent],
})
export class UiModule {}
