import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PageAddUserComponent } from './page-add-user/page-add-user.component';
import { PageEditUserComponent } from './page-edit-user/page-edit-user.component';
import { PageListUsersComponent } from './page-list-users/page-list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { PageUserComponent } from './page-user/page-user.component';

@NgModule({
  declarations: [
    PageListUsersComponent,
    PageAddUserComponent,
    PageEditUserComponent,
    PageUserComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
