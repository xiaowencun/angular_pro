import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyDetailComponent } from './components/my-detail/my-detail.component';

import { RouteReuseStrategy } from '@angular/router';
import { KeepAliveService } from './services/keep-alive.service';

import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    MyHomeComponent,
    MyListComponent,
    MyDetailComponent
  ],
  // 配置依赖
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzGridModule,
    NzTabsModule
  ],
  // 配置所需服务
  providers: [
    { provide: RouteReuseStrategy, useClass: KeepAliveService }
  ],
  // 配置主视图，一般配置根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
