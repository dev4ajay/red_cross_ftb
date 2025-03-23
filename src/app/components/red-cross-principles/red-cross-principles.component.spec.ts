import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCrossPrinciplesComponent } from './red-cross-principles.component';

describe('RedCrossPrinciplesComponent', () => {
  let component: RedCrossPrinciplesComponent;
  let fixture: ComponentFixture<RedCrossPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedCrossPrinciplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedCrossPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
