import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BassesComponent } from './basses.component';

describe('BassesComponent', () => {
  let component: BassesComponent;
  let fixture: ComponentFixture<BassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
