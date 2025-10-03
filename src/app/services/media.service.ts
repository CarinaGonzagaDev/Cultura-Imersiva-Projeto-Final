import { Injectable } from '@angular/core';

// Esta é a interface que define a estrutura dos nossos itens
export interface CarouselItem {
  image: string;
  title: string;
  rating: number;
  season: string;
  episodes: string;
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // Dados dos animes agora estão centralizados aqui
  private animes: CarouselItem[] = [
    { 
      image: 'Jujutsu Kaisen.jpg', 
      title: 'Jujutsu Kaisen', 
      season: 'S2',
      episodes: 'E23',
      rating: 8.7
    },
    { 
      image: 'Kimetsu no Yaiba.jpg', 
      title: 'Kimetsu no Yaiba', 
      season: 'S4',
      episodes: 'E8',
      rating: 9.8
    },
    { 
      image: 'Chainsaw Man.jpg', 
      title: 'Chainsaw Man', 
      season: 'S1',
      episodes: 'E12',
      rating: 9.8
    },
    { 
      image: 'Dandadan.jpg', 
      title: 'Dandadan', 
      season: 'S1',
      episodes: 'E12',
      rating: 9.8
    },
    { 
      image: 'Attack On Titan.jpg',
      title: 'Attack on Titan', 
      season: 'S4',
      episodes: 'E28',
      rating: 9.3
    },
    {
      image: 'SAKAMOTO DAYS.jpg',
      title: 'Sakamoto Days',
      season: 'S1',
      episodes: 'E12',
      rating: 9.1
    }
  ];

  // Dados dos mangás centralizados aqui
  private mangas: CarouselItem[] = [
    { 
      image: 'One Piece Mangá.jpg', 
      title: 'One Piece', 
      season: 'Em Andamento',
      episodes: '1161 Caps.',
      rating: 9.9
    },
    { 
      image: 'Look Back Mangá.jpg', 
      title: 'Look Back', 
      season: 'Finalizado',
      episodes: '1 Cap.',
      rating: 9.5
    },
    { 
      image: 'Otoyomegatari Mangá.jpg', 
      title: 'A Bride\'s Story', 
      season: 'Em Andamento',
      episodes: '112 Caps.',
      rating: 9.7
    },
    { 
      image: 'Battle Angel Alita Mangá.jpg', 
      title: 'Battle Angel Alita', 
      season: 'Finalizado',
      episodes: '51 Caps.',
      rating: 9.3
    },
    { 
      image: 'Dragon Ball Mangá.jpg', 
      title: 'Dragon Ball Super', 
      season: 'Em Andamento',
      episodes: '104 Caps.',
      rating: 8.5
    },
  ];

  constructor() { }

  // Métodos para "puxar" os dados de qualquer componente
  getAnimes(): CarouselItem[] {
    return this.animes;
  }

  getMangas(): CarouselItem[] {
    return this.mangas;
  }
}