import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos uma interface para tipar os dados dos itens do carrossel
export interface CarouselItem {
  image: string;
  title: string;
  meta: string;
  rating: number;
}

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule], // CommonModule nos dá acesso a diretivas como *ngFor
  templateUrl: './feature-carousel.component.html',
  styleUrl: './feature-carousel.component.css'
})
export class FeaturedCarouselComponent {
  // @Input permite que este componente receba dados do componente pai
  @Input() title: string = '';
  @Input() items: CarouselItem[] = [];

  // Lógica simples para o carrossel (pode ser aprimorada depois)
  currentIndex = 0;

  next() {
    // Lógica para avançar (simplificada)
    if (this.currentIndex < this.items.length - 4) { // Exibe 4 itens por vez
      this.currentIndex++;
    }
  }

  prev() {
    // Lógica para voltar (simplificada)
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getCarouselTransform() {
    // Move o carrossel em 25% para cada item (100 / 4 itens)
    return `translateX(-${this.currentIndex * 25}%)`;
  }
}