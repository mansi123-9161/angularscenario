import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2Component } from './scenario2.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [Scenario2Component, ChildComponent, ParentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario2Component,
    ChildComponent,
    ParentComponent
  ]
})
export class Scenario2Module { }
