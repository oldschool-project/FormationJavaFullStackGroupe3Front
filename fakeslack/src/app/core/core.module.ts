import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { HomeModule } from '../views/home/home.module';
import { LoginModule } from '../views/login/login.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    //NgbModule,
    UiModule,
    HomeModule,
    LoginModule,
    IconsModule,
    TemplatesModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
})
export class CoreModule {}
