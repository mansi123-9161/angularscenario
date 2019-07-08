import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Scenario1Component } from './scenario1.component';

@NgModule({
  declarations: [Scenario1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario1Component
  ]
})
export class Scenario1Module { }
