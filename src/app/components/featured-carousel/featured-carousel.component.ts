import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Media } from '../../services/media.service';
// CORREÇÃO: Importar o MediaCardComponent para que o HTML possa usá-lo
import { MediaCardComponent } from '../media-card/media-card.component';

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  // CORREÇÃO: Adicionar MediaCardComponent aos imports
  imports: [CommonModule, MediaCardComponent],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css'
})
export class FeaturedCarouselComponent {
  @Input() title: string = '';
  @Input() items: Media[] = [];

  currentIndex = 0;

  next() {
    // CORREÇÃO: Lógica ajustada para permitir avançar até o final
    const maxIndex = Math.max(0, this.items.length - 4); // Exibe 4 itens por vez
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getCarouselTransform() {
    // A lógica de transformação permanece a mesma
    return `translateX(-${this.currentIndex * 25}%)`;
  }
}