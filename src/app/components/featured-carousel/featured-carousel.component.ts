import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem } from '../../services/media.service'; // Importando a interface do serviço

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-carousel.component.html',
  // CORREÇÃO AQUI: Apontando para o arquivo .css correto
  styleUrl: './featured-carousel.component.css'
})
export class FeaturedCarouselComponent {
  // O export da interface foi movido para o serviço, o resto continua igual
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