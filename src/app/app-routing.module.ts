import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyDetailComponent } from './components/my-detail/my-detail.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyCanvasComponent } from './components/my-canvas/my-canvas.component';

const routes: Routes = [
  {
    path: "news",
    component: NewsComponent,
    data: { reuse: true }
  },
  {
    path: "home",
    component: MyHomeComponent,
  },
  {
    path: "list",
    component: MyListComponent,
  },
  {
    path: "detail/:aid",
    component: MyDetailComponent,
    // data: { reuse: true }
  },
  {
    path: "canvas",
    component: MyCanvasComponent
  },
  {
    path: "**",
    redirectTo: "news",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
