import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Team } from '../../../shared/interfaces/api-response';
import { TeamService } from '../../services/team/team.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  public teams: Team[] = [];
  public loading: boolean;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loading = true;
    this.teamService.getTeams().subscribe(data => {
      console.log('Teams', data);
      this.teams = data;
      this.loading = false;
    });
  }
}
