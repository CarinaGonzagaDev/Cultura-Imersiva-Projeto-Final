import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// ATUALIZAMOS A INTERFACE AQUI
export interface CarouselItem {
  image: string;
  title: string;
  rating: number;
  season: string;   // Novo campo
  episodes: string; // Novo campo
}

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.html'
})
export class FeaturedCarouselComponent {
  @Input() title: string = '';
  @Input() items: CarouselItem[] = [];

  // A lógica do carrossel permanece a mesma
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.items.length - 4) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getCarouselTransform() {
    return `translateX(-${this.currentIndex * 25}%)`;
  }
}