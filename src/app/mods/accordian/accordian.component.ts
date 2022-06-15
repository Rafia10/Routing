import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit {
  @Input() accordian = [] as any;
  openedItemIndex = 0;
  constructor() {}
  onClick(i: number) {
    if (i === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = i;
    }
  }
  ngOnInit(): void {}
}
