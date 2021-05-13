import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleBookComponent } from './detele-book.component';

describe('DeteleBookComponent', () => {
  let component: DeteleBookComponent;
  let fixture: ComponentFixture<DeteleBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeteleBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
