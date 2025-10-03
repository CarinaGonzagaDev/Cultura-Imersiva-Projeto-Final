import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem } from '../../services/media.service'; // Usando a mesma interface

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  // Recebe um item (anime ou mangá) como entrada
  @Input() item!: CarouselItem; 
}