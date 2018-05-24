import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GroupsService]
    });
  });

  it(
    'should be created',
    inject([GroupsService], (service: GroupsService) => {
      expect(service).toBeTruthy();
    })
  );
});
