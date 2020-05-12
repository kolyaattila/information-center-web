import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvas;

  map = new Map<string, number>();
  data = new Array<number>();
  diagramWidth = 0;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() {
    this.populateDiagram();
  }

  ngOnInit() {
    this.canvas.nativeElement.width = this.diagramWidth;
  }

  populateDiagram() {
    this.map.set('Ianuarie1', 1);
    this.map.set('Ianuarie2', 7);
    this.map.set('Ianuarie3', 5);
    this.map.set('Ianuarie4', 3);
    this.map.set('Ianuarie5', 1);
    this.map.set('Ianuarie13', 5);
    this.map.set('Ianuarie31', 1);
    this.map.set('Ianuarie42', 7);
    this.map.set('Ianuarie43', 5);
    this.map.set('Ianuarie44', 3);
    this.map.set('Ianuarie45', 1);
    this.map.set('Ianuarie413', 5);
    this.map.forEach((value: number, key: string) => {
      this.data[this.data.length] = value;
      this.lineChartLabels[this.lineChartLabels.length] = key;
      console.log(this.map.size);
    });
    this.lineChartData = [{data: this.data}];
    if (this.map.size <= 6) {
      this.diagramWidth = this.map.size * 80;
    } else {
      this.diagramWidth = this.map.size * 50;
    }
  }
}
