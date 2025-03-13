import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarybreakupdetailsComponent } from './salarybreakupdetails.component';

describe('SalarybreakupdetailsComponent', () => {
  let component: SalarybreakupdetailsComponent;
  let fixture: ComponentFixture<SalarybreakupdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalarybreakupdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarybreakupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
