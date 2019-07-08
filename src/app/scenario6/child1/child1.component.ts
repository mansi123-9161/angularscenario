import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  display(value) {
    this.childEvent.emit(value);
}
}
