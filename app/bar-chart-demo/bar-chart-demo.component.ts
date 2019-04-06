import { Component } from '@angular/core';
 
@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart-demo.component.html'
})
export class BarChartDemoComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {
      callbacks: {
        title: function(tooltipItems, barChartLabels) {
           //tooltipItems=["Hello", "222", "333", "555"];

          tooltipItems ={
            xLabel: 'Hello',
            yLabel: "222",
            datasetIndex: 0,
            index: 0};
          /*,
        { xLabel: 'Hello',
          yLabel: "222",
          datasetIndex: 1,
          index: 1,
      },
      { xLabel: 'Hello',
        yLabel: "222",
        datasetIndex: 2,
        index: 3,
    },
    { xLabel: 'Hello',
      yLabel: "222",
      datasetIndex: 4,
      index: 4,
  },
  { xLabel: 'Hello',
    yLabel: "222",
    datasetIndex: 5,
    index: 5,
},
{ xLabel: 'Hello',
  yLabel: "222",
  datasetIndex: 6,
  index: 6,
}]*/
          return tooltipItems;
        }
      }
    }
  }; 
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone; 
    }
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
}