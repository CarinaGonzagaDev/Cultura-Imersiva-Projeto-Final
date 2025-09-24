import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosFormComponent } from './erros-form.component';

describe('ErrosFormComponent', () => {
  let component: ErrosFormComponent;
  let fixture: ComponentFixture<ErrosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
