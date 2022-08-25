import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
})
export class EvenComponent implements OnInit {
  @Input() number: number | undefined;
  constructor() {}

  ngOnInit(): void {}
}
