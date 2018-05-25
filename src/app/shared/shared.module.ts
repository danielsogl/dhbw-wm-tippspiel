import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPipe } from './pipes/team/team.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeamPipe]
})
export class SharedModule { }
