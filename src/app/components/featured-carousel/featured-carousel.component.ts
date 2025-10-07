import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Media } from '../../services/media.service';
import { MediaCardComponent } from '../media-card/media-card.component';

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
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
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    const maxIndex = this.items.length > 4 ? this.items.length - 4 : 0;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxIndex;
    }
  }

  getCarouselTransform() {
    return `translateX(-${this.currentIndex * 25}%)`;
  }
}