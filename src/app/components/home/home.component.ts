import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCarouselComponent } from '../../components/featured-carousel/featured-carousel.component';

// CORREÇÃO: Importar a classe MediaService e a interface Media
import { MediaService, Media } from '../media.service';

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

  // CORREÇÃO: Usar a interface Media
  animes: Media[] = [];
  mangas: Media[] = [];

  // A injeção do serviço está correta, e agora funcionará com o import certo
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.animes = this.mediaService.getAnimes();
    this.mangas = this.mediaService.getMangas();
  }
}