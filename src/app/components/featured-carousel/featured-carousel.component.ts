import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// CORREÇÃO: Importar a interface 'Media' do serviço
import { Media } from '../media.service';

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css'
})
export class FeaturedCarouselComponent {
  @Input() title: string = '';
  // CORREÇÃO: O tipo dos itens agora é 'Media'
  @Input() items: Media[] = [];

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