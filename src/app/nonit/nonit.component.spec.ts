import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonitComponent } from './nonit.component';

describe('NonitComponent', () => {
  let component: NonitComponent;
  let fixture: ComponentFixture<NonitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
