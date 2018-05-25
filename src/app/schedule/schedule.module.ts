import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NgPipesModule } from 'ngx-pipes';

import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    NgPipesModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [SchedulePageComponent]
})
export class ScheduleModule {}
