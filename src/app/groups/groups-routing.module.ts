import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsPageComponent } from './pages/groups-page/groups-page.component';

const routes: Routes = [{ path: '', component: GroupsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule {}
