import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarybreakupinformationComponent } from './salarybreakupinformation.component';

describe('SalarybreakupinformationComponent', () => {
  let component: SalarybreakupinformationComponent;
  let fixture: ComponentFixture<SalarybreakupinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalarybreakupinformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarybreakupinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
