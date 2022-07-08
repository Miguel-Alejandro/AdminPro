import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {

  @Input() graphTitle:string = '';
  @Input('labels') doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
  @Input('data') data = [ 11, 20, 40 ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.data,
        backgroundColor: [ '#9E120E', '#FF5800', '#FFB414' ]
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
