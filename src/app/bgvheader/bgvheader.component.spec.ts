import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgvheaderComponent } from './bgvheader.component';

describe('BgvheaderComponent', () => {
  let component: BgvheaderComponent;
  let fixture: ComponentFixture<BgvheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgvheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgvheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
