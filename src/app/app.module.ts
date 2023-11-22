import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// 业务组件注册
import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyDetailComponent } from './components/my-detail/my-detail.component';

// 逻辑模块引入
import { RouteReuseStrategy } from '@angular/router';
import { KeepAliveService } from './services/keep-alive.service';

// ng-zorro 按需引入
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { DelonFormModule } from '@delon/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { MyCanvasComponent } from './components/my-canvas/my-canvas.component';
import { NzGraphModule } from 'ng-zorro-antd/graph';
// import { NzGraphModule } from 'ng-zorro-antd/graph';


@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    MyHomeComponent,
    MyListComponent,
    MyDetailComponent,
    MyCanvasComponent,
  ],
  // 配置依赖
  imports: [
    NzGraphModule,
    NzUploadModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzGridModule,
    NzTabsModule,
    NzTimelineModule,
    NzDatePickerModule,
    DelonFormModule.forRoot()
  ],
  // 配置所需服务
  providers: [
    { provide: RouteReuseStrategy, useClass: KeepAliveService }
  ],
  // 配置主视图，一般配置根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
