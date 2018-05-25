import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../../services/schedule/schedule.service';
import { Groups, Knockout } from '../../../shared/interfaces/api-response';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent implements OnInit {
  public groups: Groups;
  public knockouts: Knockout;
  public loading: boolean;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.scheduleService.getGroups().subscribe(data => {
      console.log('Groups', data);
      this.groups = data;
    });

    this.scheduleService.getKnockout().subscribe(data => {
      console.log('Knockouts', data);
      this.knockouts = data;
    });
  }
}
