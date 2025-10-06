import { Injectable } from '@angular/core';

// A interface agora se chama 'Media'
export interface Media {
  id: number;
  type: 'anime' | 'hq';
  image: string;
  title: string;
  rating: number;
  season: string;
  episodes: string;
  genres: string[];
  status?: 'Finalizado' | 'Em Lançamento' | 'Em Andamento';
  country?: string;
  releaseYear: number;
  author: string;
  studio?: string;
  ageRating: string;
  audio: string[];
  alternativeNames: string[];
  synopsis: string;
  whereToWatchRead: { platform: string; options: string[] }[];
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private animes: Media[] = [
    {
      id: 1, type: 'anime', image: 'Jujutsu Kaisen.jpg', title: 'Jujutsu Kaisen',
      season: 'S2', episodes: 'E23', rating: 8.7,
      genres: ['Ação', 'Fantasia', 'Shonen', 'Sobrenatural'], status: 'Em Lançamento',
      releaseYear: 2020, author: 'Gege Akutami', studio: 'MAPPA', ageRating: '16+',
      audio: ['Legendado', 'Dublado'], alternativeNames: ['Sorcery Fight'],
      synopsis: 'Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando acidentes terríveis que podem levar até mesmo à morte. E, para piorar, Maldições só podem ser exorcizadas por outras Maldições.',
      whereToWatchRead: [
        { platform: 'Crunchyroll', options: ['Premium'] }
      ]
    },
    {
      id: 2, type: 'anime', image: 'Kimetsu no Yaiba.jpg', title: 'Kimetsu no Yaiba',
      season: 'S4', episodes: 'E8', rating: 9.8,
      genres: ['Ação', 'Aventura', 'Shonen', 'Sobrenatural'], status: 'Em Lançamento',
      releaseYear: 2019, author: 'Koyoharu Gotouge', studio: 'ufotable', ageRating: '16+',
      audio: ['Legendado', 'Dublado'], alternativeNames: ['Demon Slayer'],
      synopsis: 'Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada em um demônio.',
      whereToWatchRead: [
        { platform: 'Crunchyroll', options: ['Premium'] },
        { platform: 'Netflix', options: ['Assinatura'] }
      ]
    },
    // Adicione os outros animes aqui seguindo a mesma estrutura
  ];

  private mangas: Media[] = [
    {
      id: 11, type: 'hq', image: 'One Piece Mangá.jpg', title: 'One Piece',
      season: 'Em Andamento', episodes: '1161 Caps.', rating: 9.9,
      genres: ['Aventura', 'Fantasia', 'Ação', 'Shonen'], country: 'Japão (Mangá)',
      releaseYear: 1997, author: 'Eiichiro Oda', ageRating: '12+',
      audio: [], alternativeNames: [],
      synopsis: 'A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.',
      whereToWatchRead: [
        { platform: 'Manga Plus', options: ['Grátis (últimos capítulos)'] }
      ]
    },
    // Adicione os outros mangás aqui seguindo a mesma estrutura
  ];

  constructor() { }

  getAnimes(): Media[] {
    return this.animes;
  }

  getMangas(): Media[] {
    return this.mangas;
  }

  getMediaById(id: string): Media | undefined {
    const allMedia = [...this.animes, ...this.mangas];
    return allMedia.find(media => media.id.toString() === id);
  }
}