import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as echarts from 'echarts';

import { Router,ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'


@Component({

  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})

export class MyHomeComponent {
  public inpStr: String = "";
  public homeMsg: String = "我是home组件的消息msg1111"

  @ViewChild("myChart", {static: true}) myChart: any
  @Input() sonnews: any[]
  @Input() sonFun: any
  @Input() allNews: any

  @Output() private outer = new EventEmitter()

  constructor(private route: ActivatedRoute) {
    this.sonnews = []
  }

  ngOnInit() {
    console.log("首页init11111")
    // this.allNews.faFUn()
    // this.sonFun()
    console.log("获取父组件this", this.allNews);
    this.inpStr = String(this.sonnews)
    this.route.queryParams.subscribe((res) => {
      console.log("home-route", res);
      
    })
  }

  ngAfterViewInit(): void {
    // console.log("myChart11", this.myChart.nativeElement);
    this.initChart()    
    // setTimeout(() => {
    //   this.initChart()
    // }, 3000);
  }

  ngOnDestroy(): void {
    console.log("首页销毁1111");
  }

  initChart() {
    const myDom = this.myChart.nativeElement
    myDom.style.width = "360px"
    myDom.style.height = "274px"
    const chart = echarts.init(myDom)
    const option = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: '装修工程', 2015: 65, 2016: 81, 2017: 51 },
          { product: '设计服务', 2015: 3, 2016: 2.5, 2017: 2.5 },
          { product: '监理服务', 2015: 0.5, 2016: 0.5, 2017: 0.5 },
          { product: '造价服务', 2015: 1.3, 2016: 1.17, 2017: 0.96 },
          { product: '标识标牌', 2015: 0.8, 2016: 0.77, 2017: 0.65 },
          { product: '网络布线及耗材', 2015: 1.2, 2016: 1.1, 2017: 1.05 },
          { product: '其他', 2015: 3, 2016: 1.3, 2017: 1.3 },
        ]
      },
      xAxis: { 
        type: 'category' ,

        // 全部显示X轴名字，显示不下旋转45度展示；
        axisLabel: {
          interval: 0,
          rotate: 45,
        }
      },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    chart.setOption(option)
    // chart.resize();
    
    window.addEventListener("resize", () => {
      console.log("resize11111");
      
      chart.resize();
    })  
  }

  btnClick() {
    // this.outer.emit(this.homeMsg)
    // this.outer.emit(this.homeFun)
    this.outer.emit({
      msg: this.homeMsg,
      funs: this.homeFun
    })
  }

  homeFun() {
    console.log("自我介绍 我是home的方法");
  }
}