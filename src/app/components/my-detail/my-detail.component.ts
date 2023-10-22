import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.scss']
})
export class MyDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private location:  Location,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    console.log("详情init1111");
    console.log("location11", this.location);
    
    
    this.route.params.subscribe((res) => {
      console.log("detail-route11", res);
      
    })
    
  }
  ngOnDestroy(): void {
    console.log("详情销毁1111");
    
    
  }

  goBack() {
    // go(-1)

    this.location.back()
    // this.router.navigate([".."])
  }
  
  goNews() {
    this.router.navigate(["news"])
  }
}
