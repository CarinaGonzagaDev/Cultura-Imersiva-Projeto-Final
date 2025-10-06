import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- 1. IMPORTAR RouterLink
import { CarouselItem } from '../../services/media.service'; // <-- 2. USAR CarouselItem

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // <-- 3. ADICIONAR RouterLink AQUI
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  // 4. USAR O TIPO CORRETO
  @Input() item!: CarouselItem;
}