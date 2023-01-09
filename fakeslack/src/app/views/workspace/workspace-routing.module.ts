import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWorkspaceComponent } from './page-workspace/page-workspace.component';

const routes: Routes = [{ path: '', component: PageWorkspaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
