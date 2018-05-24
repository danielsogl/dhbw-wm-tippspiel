import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ],
  declarations: [SchedulePageComponent]
})
export class ScheduleModule { }
