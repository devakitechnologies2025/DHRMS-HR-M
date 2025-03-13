import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferletterdetailsComponent } from './offerletterdetails.component';

describe('OfferletterdetailsComponent', () => {
  let component: OfferletterdetailsComponent;
  let fixture: ComponentFixture<OfferletterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferletterdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferletterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
