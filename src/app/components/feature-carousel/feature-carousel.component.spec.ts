import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCarouselComponent } from './feature-carousel.component';

describe('FeatureCarouselComponent', () => {
  let component: FeatureCarouselComponent;
  let fixture: ComponentFixture<FeatureCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
