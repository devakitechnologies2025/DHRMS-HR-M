import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgvdashboardComponent } from './bgvdashboard.component';

describe('BgvdashboardComponent', () => {
  let component: BgvdashboardComponent;
  let fixture: ComponentFixture<BgvdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgvdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgvdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
