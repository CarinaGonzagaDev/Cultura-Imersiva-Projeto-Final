import { Injectable } from '@angular/core';

export interface CarouselItem {
  id: number;
  type: 'anime' | 'hq';
  image: string;
  title: string;
  rating: number;
  season: string;
  episodes: string;
  genres: string[];
  status?: 'Finalizado' | 'Em Lançamento';
  country?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private animes: CarouselItem[] = [
    { 
      id: 1, type: 'anime', image: 'Jujutsu Kaisen.jpg', title: 'Jujutsu Kaisen', 
      season: 'S2', episodes: 'E23', rating: 8.7,
      genres: ['Ação', 'Fantasia', 'Shonen', 'Sobrenatural'], status: 'Em Lançamento'
    },
    { 
      id: 2, type: 'anime', image: 'Kimetsu no Yaiba.jpg', title: 'Kimetsu no Yaiba', 
      season: 'S4', episodes: 'E8', rating: 9.8,
      genres: ['Ação', 'Aventura', 'Shonen', 'Sobrenatural'], status: 'Em Lançamento'
    },
    { 
      id: 3, type: 'anime', image: 'Chainsaw Man.jpg', title: 'Chainsaw Man', 
      season: 'S1', episodes: 'E12', rating: 9.8,
      genres: ['Ação', 'Fantasia Sombria', 'Horror', 'Shonen'], status: 'Finalizado'
    },
    { 
      id: 4, type: 'anime', image: 'Dandadan.jpg', title: 'Dandadan', 
      season: 'S1', episodes: 'E12', rating: 9.8,
      genres: ['Comédia', 'Ficção Científica', 'Ação', 'Sobrenatural'], status: 'Em Lançamento'
    },
    { 
      id: 5, type: 'anime', image: 'Attack On Titan.jpg', title: 'Attack on Titan', 
      season: 'S4', episodes: 'E28', rating: 9.3,
      genres: ['Ação', 'Suspense', 'Drama', 'Fantasia Sombria'], status: 'Finalizado'
    },
    {
      id: 6, type: 'anime', image: 'SAKAMOTO DAYS.jpg', title: 'Sakamoto Days',
      season: 'S1', episodes: 'E12', rating: 9.1,
      genres: ['Ação', 'Comédia', 'Shonen', 'Slice of Life'], status: 'Em Lançamento'
    }
  ];

  private mangas: CarouselItem[] = [
    { 
      id: 11, type: 'hq', image: 'One Piece Mangá.jpg', title: 'One Piece', 
      season: 'Em Andamento', episodes: '1161 Caps.', rating: 9.9,
      genres: ['Aventura', 'Fantasia', 'Ação', 'Shonen'], country: 'Japão (Mangá)'
    },
    { 
      id: 12, type: 'hq', image: 'Look Back Mangá.jpg', title: 'Look Back', 
      season: 'Finalizado', episodes: '1 Cap.', rating: 9.5,
      genres: ['Drama', 'Slice of Life'], country: 'Japão (Mangá)'
    },
    { 
      id: 13, type: 'hq', image: 'Otoyomegatari Mangá.jpg', title: 'A Bride\'s Story', 
      season: 'Em Andamento', episodes: '112 Caps.', rating: 9.7,
      genres: ['Histórico', 'Romance', 'Slice of Life', 'Seinen'], country: 'Japão (Mangá)'
    },
    { 
      id: 14, type: 'hq', image: 'Battle Angel Alita Mangá.jpg', title: 'Battle Angel Alita', 
      season: 'Finalizado', episodes: '51 Caps.', rating: 9.3,
      genres: ['Ação', 'Ficção Científica', 'Psicológico', 'Seinen'], country: 'Japão (Mangá)'
    },
    { 
      id: 15, type: 'hq', image: 'Dragon Ball Mangá.jpg', title: 'Dragon Ball Super', 
      season: 'Em Andamento', episodes: '104 Caps.', rating: 8.5,
      genres: ['Ação', 'Aventura', 'Shonen'], country: 'Japão (Mangá)'
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