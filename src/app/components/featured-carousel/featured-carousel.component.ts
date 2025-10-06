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
    const maxIndex = this.items.length > 4 ? this.items.length - 4 : 0;
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
    // A cada avanço, movemos o carrossel 25% para a esquerda (largura de 1 item + margem)
    return `translateX(-${this.currentIndex * 25}%)`;
  }
}