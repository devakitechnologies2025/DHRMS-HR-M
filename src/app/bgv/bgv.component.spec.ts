import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgvComponent } from './bgv.component';

describe('BgvComponent', () => {
  let component: BgvComponent;
  let fixture: ComponentFixture<BgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
