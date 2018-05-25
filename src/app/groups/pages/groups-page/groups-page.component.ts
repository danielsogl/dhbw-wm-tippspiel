import { Component, OnInit } from '@angular/core';

import { Team } from '../../../shared/interfaces/api-response';
import { GroupsService } from '../../services/groups/groups.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})
export class GroupsPageComponent implements OnInit {
  public teams: Team[] = [];
  public loading: boolean;

  constructor(private groupService: GroupsService) {}

  ngOnInit() {
    this.loading = true;
    this.groupService.getTeams().subscribe(data => {
      console.log('Teams', data);
      this.teams = data;
      this.loading = false;
    });
  }
}
