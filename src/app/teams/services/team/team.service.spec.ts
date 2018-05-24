import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';

describe('TeamService', () => {
  let injector: TestBed;
  let service: TeamService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamService]
    });

    injector = getTestBed();
    service = injector.get(TeamService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    service.getTeams().subscribe(data => {
      expect(data).toBeDefined();
    });

    const req = httpMock.expectOne(`assets/json/teams.json`);
    expect(req.request.method).toBe('GET');
  });
});
