import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';

describe('ScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScheduleService]
    });
  });

  it(
    'should be created',
    inject([ScheduleService], (service: ScheduleService) => {
      expect(service).toBeTruthy();
    })
  );
});
