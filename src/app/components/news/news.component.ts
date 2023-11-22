import { Component, ViewChildren } from '@angular/core';

import { Router } from '@angular/router';

import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  public msg:String = "测试数据1111111" 

  public ele:String = "<h1>我是html标签<h1>"

  public arr:Array<String> = ["萨达","奥多","安稳"]


  public inpStr:String = ""
  
  public news: any[] = ["asd", "154","oljh"]

  public str1: String = ""

  public obj1: Object = {
    timeEnd: "2023-10-01"
  }
  date: Date = new Date("2022-10-23")
  defaultPickerValue: Date = new Date('2023-11-01')

  @ViewChild("sonEle") sonEle: any

  //  初始化
  constructor(private router: Router) {
    
  }

  ngOnInit() {
    console.log("新闻页init1111");
    // console.log("付访问子", this.sonEle.homeMsg);
    
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }
  ngOnDestroy(): void {
    console.log("新闻页销毁11111");
    
    
  }

  goHome() {
    // 编程式导航 query 方式传参 & 连接多个参数  ?proId=12121&names=zjhangsan
    this.router.navigate(
      ["home"], 
      {
        queryParams: {
          proId: "12121",
          names: "zjhangsan"
        } 
      }
    )
  }

  goList() { 
    // 没有参数 路由跳转
    this.router.navigate(["list"])
  }

  goDetail() {
    // params 方式传参 不过是动态路由的传参方式 /detail/:pid
    this.router.navigate(["detail", "3.1415926"])
  }

    goCanvas() {
    this.router.navigate(["canvas"])
  }

  faFUn() {
    console.log("我是父亲news的方法");
    
  }

  getSon(val: any) {
    console.log("val111", val);
    val.funs()
    // this.str1 = val
  }

  getData() {
    console.log("直接访问子组件", this.sonEle.homeMsg);
    
  }

  onChange(e: any) {

  }
}