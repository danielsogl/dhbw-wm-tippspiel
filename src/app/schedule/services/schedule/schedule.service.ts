import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import {
  ApiResponse,
  Groups,
  Knockout
} from '../../../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  getGroups(): Observable<Groups> {
    return this.http.get<ApiResponse>(environment.endpoint).pipe(
      map(data => {
        return data.groups;
      })
    );
  }

  getKnockout(): Observable<Knockout> {
    return this.http.get<ApiResponse>(environment.endpoint).pipe(
      map(data => {
        return data.knockout;
      })
    );
  }
}
