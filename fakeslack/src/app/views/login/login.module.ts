import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { PageResetComponent } from './page-reset/page-reset.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [PageSignInComponent, PageSignUpComponent, PageResetComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
