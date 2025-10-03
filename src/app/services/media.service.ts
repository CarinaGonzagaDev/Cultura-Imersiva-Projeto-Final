import { Injectable } from '@angular/core';

// Adicionamos a propriedade 'genres' para os filtros
export interface CarouselItem {
  image: string;
  title: string;
  rating: number;
  season: string;
  episodes: string;
  genres: string[]; 
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // Dados com os caminhos de imagem CORRIGIDOS
  private animes: CarouselItem[] = [
    { 
      image: 'Jujutsu Kaisen.jpg', 
      title: 'Jujutsu Kaisen', 
      season: 'S2',
      episodes: 'E23',
      rating: 8.7,
      genres: ['Ação', 'Fantasia Sombria']
    },
    { 
      image: 'Kimetsu no Yaiba.jpg', 
      title: 'Kimetsu no Yaiba', 
      season: 'S4',
      episodes: 'E8',
      rating: 9.8,
      genres: ['Ação', 'Aventura']
    },
    { 
      image: 'Chainsaw Man.jpg', 
      title: 'Chainsaw Man', 
      season: 'S1',
      episodes: 'E12',
      rating: 9.8,
      genres: ['Ação', 'Fantasia Sombria']
    },
    { 
      image: 'Dandadan.jpg', 
      title: 'Dandadan', 
      season: 'S1',
      episodes: 'E12',
      rating: 9.8,
      genres: ['Comédia', 'Sci-Fi']
    },
    { 
      image: 'Attack On Titan.jpg',
      title: 'Attack on Titan', 
      season: 'S4',
      episodes: 'E28',
      rating: 9.3,
      genres: ['Ação', 'Suspense']
    },
    {
      image: 'SAKAMOTO DAYS.jpg',
      title: 'Sakamoto Days',
      season: 'S1',
      episodes: 'E12',
      rating: 9.1,
      genres: ['Ação', 'Comédia']
    }
  ];

  private mangas: CarouselItem[] = [
    { 
      image: 'One Piece Mangá.jpg', 
      title: 'One Piece', 
      season: 'Em Andamento',
      episodes: '1161 Caps.',
      rating: 9.9,
      genres: ['Aventura', 'Fantasia']
    },
    { 
      image: 'Look Back Mangá.jpg', 
      title: 'Look Back', 
      season: 'Finalizado',
      episodes: '1 Cap.',
      rating: 9.5,
      genres: ['Drama', 'Slice of Life']
    },
    { 
      image: 'Otoyomegatari Mangá.jpg', 
      title: 'A Bride\'s Story', 
      season: 'Em Andamento',
      episodes: '112 Caps.',
      rating: 9.7,
      genres: ['Histórico', 'Romance']
    },
    { 
      image: 'Battle Angel Alita Mangá.jpg', 
      title: 'Battle Angel Alita', 
      season: 'Finalizado',
      episodes: '51 Caps.',
      rating: 9.3,
      genres: ['Ação', 'Sci-Fi']
    },
    { 
      image: 'Dragon Ball Mangá.jpg', 
      title: 'Dragon Ball Super', 
      season: 'Em Andamento',
      episodes: '104 Caps.',
      rating: 8.5,
      genres: ['Ação', 'Aventura']
    },
  ];

  constructor() { }

  getAnimes(): CarouselItem[] {
    return this.animes;
  }

  getMangas(): CarouselItem[] {
    return this.mangas;
  }
}