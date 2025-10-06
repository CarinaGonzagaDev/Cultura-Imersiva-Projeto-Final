import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// CORREÇÃO: Importar 'Media' em vez de 'CarouselItem'
import { Media } from '../../services/media.service'; 

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  @Input() item!: Media; 
}