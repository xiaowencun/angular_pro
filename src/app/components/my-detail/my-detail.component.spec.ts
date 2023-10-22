import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailComponent } from './my-detail.component';

describe('MyDetailComponent', () => {
  let component: MyDetailComponent;
  let fixture: ComponentFixture<MyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDetailComponent]
    });
    fixture = TestBed.createComponent(MyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
