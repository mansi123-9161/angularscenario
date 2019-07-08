import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {Scenario4Component} from './scenario4.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent, Scenario4Component],
  imports: [
    CommonModule
  ],
  exports: [ChildComponent, ParentComponent, Scenario4Component

  ]
})
export class Scenario4Module { }
