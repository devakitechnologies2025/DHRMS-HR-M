import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollheaderComponent } from './payrollheader.component';

describe('PayrollheaderComponent', () => {
  let component: PayrollheaderComponent;
  let fixture: ComponentFixture<PayrollheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
