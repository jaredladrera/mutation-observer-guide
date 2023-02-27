import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPptComponent } from './demo-ppt.component';

describe('DemoPptComponent', () => {
  let component: DemoPptComponent;
  let fixture: ComponentFixture<DemoPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
