import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAvaliadosComponent } from './top-avaliados.component';

describe('TopAvaliadosComponent', () => {
  let component: TopAvaliadosComponent;
  let fixture: ComponentFixture<TopAvaliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAvaliadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAvaliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
