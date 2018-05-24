import { Component, OnInit } from '@angular/core';

import { Team, Groups } from '../../../shared/interfaces/api-response';
import { GroupsService } from '../../services/groups/groups.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})
export class GroupsPageComponent implements OnInit {
  public groups: Groups;
  public loading: boolean;

  constructor(private groupService: GroupsService) {}

  ngOnInit() {
    this.loading = true;
    this.groupService.getGroups().subscribe(data => {
      this.groups = data;
      this.loading = false;
    });
  }
}
