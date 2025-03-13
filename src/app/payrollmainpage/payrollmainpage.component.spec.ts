import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollmainpageComponent } from './payrollmainpage.component';

describe('PayrollmainpageComponent', () => {
  let component: PayrollmainpageComponent;
  let fixture: ComponentFixture<PayrollmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollmainpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
