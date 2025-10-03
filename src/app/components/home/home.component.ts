import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCarouselComponent } from '../../components/featured-carousel/featured-carousel.component';

// Importe o serviço e a interface
import { MediaService, CarouselItem } from '../../services/media.service';

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

  // Arrays que receberão os dados do serviço
  animes: CarouselItem[] = [];
  mangas: CarouselItem[] = [];

  // Injeta o serviço no construtor
  constructor(private mediaService: MediaService) {}

  // "ngOnInit" é um método que roda quando o componente é iniciado
  ngOnInit(): void {
    // Puxamos os dados do serviço e preenchemos os arrays locais
    this.animes = this.mediaService.getAnimes();
    this.mangas = this.mediaService.getMangas();
  }
}