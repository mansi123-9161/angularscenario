import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.css']
})
export class Scenario1Component implements OnInit {
  public name = 'user1';
  public myId = 'testuser';
  public scene2 = '';
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log('{{welcome}}');
  }
  printData(value)
  {
    console.log(value);
  }
}
