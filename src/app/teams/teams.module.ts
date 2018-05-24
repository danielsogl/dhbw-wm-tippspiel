import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SharedModule } from '../shared/shared.module';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule
  ],
  declarations: [TeamsPageComponent]
})
export class TeamsModule {}
