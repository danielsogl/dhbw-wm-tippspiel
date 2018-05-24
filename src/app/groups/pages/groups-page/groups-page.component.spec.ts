import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgPipesModule } from 'ngx-pipes';

import { GroupsService } from '../../services/groups/groups.service';
import { GroupsPageComponent } from './groups-page.component';

describe('GroupsPageComponent', () => {
  let component: GroupsPageComponent;
  let fixture: ComponentFixture<GroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatProgressBarModule,
        NgPipesModule,
        HttpClientModule
      ],
      providers: [GroupsService],
      declarations: [GroupsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
