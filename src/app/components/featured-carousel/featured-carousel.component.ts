import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem } from '../../services/media.service'; // <-- Caminho corrigido

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css'
})
export class FeaturedCarouselComponent {
  @Input() title: string = '';
  @Input() items: CarouselItem[] = [];

  currentIndex = 0;

  next() {
    // Lógica para 4 itens por vez
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