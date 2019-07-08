import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import {Scenario5Component} from './scenario5.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent, GrandParentComponent, Scenario5Component],
  imports: [
    CommonModule
  ],
  exports: [ChildComponent, ParentComponent, GrandParentComponent, Scenario5Component]
})
export class Scenario5Module { }
