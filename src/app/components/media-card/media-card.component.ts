import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- IMPORT ADICIONADO
import { CarouselItem } from '../../services/media.service'; // <-- CORRIGIDO para CarouselItem

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // <-- RouterLink ADICIONADO
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  @Input() item!: CarouselItem; 
}