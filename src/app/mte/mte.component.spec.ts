import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTEComponent } from './mte.component';

describe('MTEComponent', () => {
  let component: MTEComponent;
  let fixture: ComponentFixture<MTEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
