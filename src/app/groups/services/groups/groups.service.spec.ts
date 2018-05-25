import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { inject, TestBed, getTestBed } from '@angular/core/testing';

import { GroupsService } from './groups.service';
import { environment } from '../../../../environments/environment';

describe('GroupsService', () => {
  let injector: TestBed;
  let service: GroupsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GroupsService]
    });

    injector = getTestBed();
    service = injector.get(GroupsService);
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

    const req = httpMock.expectOne('assets/json/teams.json');
    expect(req.request.method).toBe('GET');
  });
});
