import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgvallemployeesComponent } from './bgvallemployees.component';

describe('BgvallemployeesComponent', () => {
  let component: BgvallemployeesComponent;
  let fixture: ComponentFixture<BgvallemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgvallemployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgvallemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
