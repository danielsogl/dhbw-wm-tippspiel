import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TeamService } from '../../services/team/team.service';
import { TeamsPageComponent } from './teams-page.component';

describe('TeamsPageComponent', () => {
  let component: TeamsPageComponent;
  let fixture: ComponentFixture<TeamsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressBarModule,
        MatCardModule,
        MatListModule,
        HttpClientModule
      ],
      providers: [TeamService],
      declarations: [TeamsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
