import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgPipesModule } from 'ngx-pipes';

import { SharedModule } from '../shared/shared.module';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    NgPipesModule,
    MatExpansionModule
  ],
  declarations: [GroupsPageComponent]
})
export class GroupsModule {}
