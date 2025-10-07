import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCarouselComponent } from '../../components/featured-carousel/featured-carousel.component';
import { MediaService, Media } from '../../services/media.service'; // CORREÇÃO: Importando 'Media'

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

  animes: Media[] = []; // CORREÇÃO: Usando o tipo 'Media'
  mangas: Media[] = []; // CORREÇÃO: Usando o tipo 'Media'

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.animes = this.mediaService.getAnimes();
    this.mangas = this.mediaService.getMangas();
  }
}