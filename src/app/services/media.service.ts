import { Injectable } from '@angular/core';

export interface CarouselItem {
  id: number; // <-- ADICIONADO
  type: 'anime' | 'hq'; // <-- ADICIONADO
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
    // ... Adicione id e type para os outros animes ...
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
    // ... Adicione id e type para os outros mangás ...
  ];

  constructor() { }

  getAnimes(): CarouselItem[] {
    return this.animes;
  }

  getMangas(): CarouselItem[] {
    return this.mangas;
  }
}