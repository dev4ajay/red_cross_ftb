import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRedComponent } from './about-red.component';

describe('AboutRedComponent', () => {
  let component: AboutRedComponent;
  let fixture: ComponentFixture<AboutRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
