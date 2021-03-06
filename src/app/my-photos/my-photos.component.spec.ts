import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhotosComponent } from './my-photos.component';

describe('MyPhotosComponent', () => {
  let component: MyPhotosComponent;
  let fixture: ComponentFixture<MyPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
