import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalinformationComponent } from './professionalinformation.component';

describe('ProfessionalinformationComponent', () => {
  let component: ProfessionalinformationComponent;
  let fixture: ComponentFixture<ProfessionalinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalinformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
