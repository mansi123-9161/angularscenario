import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

@NgModule({
  declarations: [ChildCompComponent, ParentCompComponent],
  imports: [
    CommonModule
  ]
})
export class Scenario3Module { }
