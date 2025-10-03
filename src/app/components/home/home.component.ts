import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCarouselComponent, CarouselItem } from '../feature-carousel/feature-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // Importamos os componentes que vamos usar no template
  imports: [ HeroComponent,FeaturedCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Dados mocados (no futuro, viriam de uma API)
  animes: CarouselItem[] = [
    { image: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg', title: 'Fullmetal Alchemist', meta: 'Ação, Aventura', rating: 9.1 },
    { image: 'https://cdn.myanimelist.net/images/anime/1988/119433.jpg', title: 'Jujutsu Kaisen', meta: 'Ação, Sobrenatural', rating: 8.6 },
    { image: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg', title: 'Shingeki no Kyojin', meta: 'Ação, Fantasia', rating: 8.5 },
    { image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', title: 'Steins;Gate', meta: 'Sci-Fi, Suspense', rating: 9.0 },
    { image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', title: 'Death Note', meta: 'Suspense, Psicológico', rating: 8.6 },
  ];

  mangas: CarouselItem[] = [
    { image: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg', title: 'Berserk', meta: 'Fantasia Sombria', rating: 9.4 },
    { image: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg', title: 'Vagabond', meta: 'Ação, Histórico', rating: 9.2 },
    { image: 'https://cdn.myanimelist.net/images/manga/3/258224.jpg', title: 'One Piece', meta: 'Aventura, Fantasia', rating: 9.2 },
    { image: 'https://cdn.myanimelist.net/images/manga/3/242981.jpg', title: 'Vinland Saga', meta: 'Ação, Histórico', rating: 9.0 },
    { image: 'https://cdn.myanimelist.net/images/manga/3/258223.jpg', title: 'Oyasumi Punpun', meta: 'Drama, Psicológico', rating: 9.0 },
  ];
}