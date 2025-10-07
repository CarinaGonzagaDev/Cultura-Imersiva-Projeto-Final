// carinagonzagadev/cultura-imersiva-projeto-final/Cultura-Imersiva-Projeto-Final-cb9a6c327e89197ceef83793f15cdea0c7b9b0b8/src/app/components/featured-carousel/featured-carousel.component.ts

import { Component, Input, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class FeaturedCarouselComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: Media[] = [];

  currentIndex = 0;
  
  private itemsPerPage = 4;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateItemsPerPage(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage(event.target.innerWidth);
  }

  private updateItemsPerPage(width: number) {
    if (width <= 768) {
      this.itemsPerPage = 1;
    } else if (width <= 992) {
      this.itemsPerPage = 3;
    } else {
      this.itemsPerPage = 4;
    }
  }

  next() {
    const maxIndex = Math.max(0, this.items.length - this.itemsPerPage);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    const maxIndex = Math.max(0, this.items.length - this.itemsPerPage);
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxIndex;
    }
  }

  getCarouselTransform() {
    const itemWidth = 100 / this.itemsPerPage;
    return `translateX(-${this.currentIndex * itemWidth}%)`;
  }
}