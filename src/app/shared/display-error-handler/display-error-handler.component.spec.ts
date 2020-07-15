import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayErrorHandlerComponent} from './display-error-handler.component';

describe('DisplayErrorHandlerComponent', () => {
  let component: DisplayErrorHandlerComponent;
  let fixture: ComponentFixture<DisplayErrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayErrorHandlerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
