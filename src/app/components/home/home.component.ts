import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeaturedCarouselComponent } from '../featured-carousel/featured-carousel.component';
import { MediaService, CarouselItem } from '../../services/media.service'; // <-- Caminho corrigido

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  animes: CarouselItem[] = [];
  mangas: CarouselItem[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.animes = this.mediaService.getAnimes();
    this.mangas = this.mediaService.getMangas();
  }
}