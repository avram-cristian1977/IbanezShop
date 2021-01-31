import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowBodyComponent } from './hollow-body.component';

describe('HollowBodyComponent', () => {
  let component: HollowBodyComponent;
  let fixture: ComponentFixture<HollowBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollowBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollowBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
