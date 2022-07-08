import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progress1:number = 0;
  progress2:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get getProgress1Value() {
    return ` ${this.progress1}% `
  }

  get getProgress2Value() {
    return ` ${this.progress2}% `
  }

}
