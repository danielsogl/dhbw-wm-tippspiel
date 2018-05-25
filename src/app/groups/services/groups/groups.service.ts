import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Team } from '../../../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('assets/json/teams.json');
  }
}
