import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeftpannelComponent } from './header-leftpannel.component';

describe('HeaderLeftpannelComponent', () => {
  let component: HeaderLeftpannelComponent;
  let fixture: ComponentFixture<HeaderLeftpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLeftpannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLeftpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
