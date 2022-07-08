import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component implements OnInit {

  public salesLabels = ['Enero', 'Febreo', 'Marzo'];
  public salesData = [ 40, 40, 20 ]
  constructor() { }

  ngOnInit(): void {
  }

}
