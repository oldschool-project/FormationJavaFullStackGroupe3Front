import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddUserComponent } from './page-add-user/page-add-user.component';
import { PageEditUserComponent } from './page-edit-user/page-edit-user.component';
import { PageListUsersComponent } from './page-list-users/page-list-users.component';
import { PageUserComponent } from './page-user/page-user.component';

const routes: Routes = [
  { path: '', component: PageListUsersComponent },
  { path: 'add', component: PageAddUserComponent },
  { path: 'edit/:id', component: PageEditUserComponent },
  { path: ':id', component: PageUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
