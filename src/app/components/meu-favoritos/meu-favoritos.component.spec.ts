import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuFavoritosComponent } from './meu-favoritos.component';

describe('MeuFavoritosComponent', () => {
  let component: MeuFavoritosComponent;
  let fixture: ComponentFixture<MeuFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
