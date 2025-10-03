import { ComponentFixture, TestBed } from '@angular/core/testing';

// CORREÇÃO 1: O caminho e o nome do componente importado
import { FeaturedCarouselComponent } from './featured-carousel.component';

// CORREÇÃO 2: O nome no 'describe' (opcional, mas bom para consistência)
describe('FeaturedCarouselComponent', () => { 
  // CORREÇÃO 3: O tipo da variável 'component'
  let component: FeaturedCarouselComponent;
  // CORREÇÃO 4: O tipo da variável 'fixture'
  let fixture: ComponentFixture<FeaturedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CORREÇÃO 5: O componente nos imports do módulo de teste
      imports: [FeaturedCarouselComponent]
    })
    .compileComponents();

    // CORREÇÃO 6: O componente sendo criado
    fixture = TestBed.createComponent(FeaturedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});