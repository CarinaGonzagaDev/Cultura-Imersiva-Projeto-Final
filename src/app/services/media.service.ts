import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    {
      id: 3, type: 'anime', image: 'Chainsaw Man.jpg', title: 'Chainsaw Man',
      season: 'S1', episodes: 'E12', rating: 9.8,
      genres: ['Ação', 'Fantasia Sombria', 'Horror', 'Shonen'], status: 'Em Lançamento',
      releaseYear: 2022, author: 'Tatsuki Fujimoto', studio: 'MAPPA', ageRating: '18+',
      audio: ['Legendado'], alternativeNames: [],
      synopsis: 'Denji é um jovem que trabalha como caçador de demônios para a Yakuza. Após ser traído e morto, ele renasce como Chainsaw Man, um híbrido de demônio e humano com motosserras no lugar de braços e cabeça.',
      whereToWatchRead: [
        { platform: 'Crunchyroll', options: ['Premium'] }
      ]
    },
    {
      id: 4, type: 'anime', image: 'Dandadan.jpg', title: 'Dandadan',
      season: 'S1', episodes: 'E12', rating: 9.8,
      genres: ['Comédia', 'Ficção Científica', 'Ação', 'Sobrenatural'], status: 'Em Lançamento',
      releaseYear: 2024, author: 'Yukinobu Tatsu', studio: 'Science SARU', ageRating: '14+',
      audio: ['Legendado'], alternativeNames: [],
      synopsis: 'Momo Ayase, uma colegial que acredita em fantasmas, e seu colega de classe, Okarun, que acredita em alienígenas, fazem uma aposta para ver quem está certo. O resultado é uma aventura caótica e hilária envolvendo o paranormal.',
      whereToWatchRead: [
        { platform: 'Netflix', options: ['Assinatura'] }
      ]
    },
    {
      id: 5, type: 'anime', image: 'Attack On Titan.jpg', title: 'Attack on Titan',
      season: 'S4', episodes: 'E28', rating: 9.3,
      genres: ['Ação', 'Suspense', 'Drama', 'Fantasia Sombria'], status: 'Finalizado',
      releaseYear: 2013, author: 'Hajime Isayama', studio: 'Wit Studio / MAPPA', ageRating: '18+',
      audio: ['Legendado', 'Dublado'], alternativeNames: ['Shingeki no Kyojin'],
      synopsis: 'Em um mundo onde a humanidade vive cercada por muralhas para se proteger de gigantes devoradores de humanos, um jovem chamado Eren Yeager jura exterminar todos os titãs após sua cidade ser destruída.',
      whereToWatchRead: [
        { platform: 'Crunchyroll', options: ['Premium'] }
      ]
    },
    {
      id: 6, type: 'anime', image: 'SAKAMOTO DAYS.jpg', title: 'Sakamoto Days',
      season: 'S1', episodes: 'E12', rating: 9.1,
      genres: ['Ação', 'Comédia', 'Shonen', 'Slice of Life'], status: 'Em Lançamento',
      releaseYear: 2025, author: 'Yuto Suzuki', studio: 'TMS Entertainment', ageRating: '14+',
      audio: ['Legendado'], alternativeNames: [],
      synopsis: 'Taro Sakamoto era o maior assassino de todos os tempos, temido por vilões e respeitado por seus pares. Mas um dia ele se apaixonou, casou, teve uma filha e se tornou um pacato dono de uma loja de conveniência.',
      whereToWatchRead: [
        { platform: 'Netflix', options: ['Assinatura'] }
      ]
    }
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
    {
      id: 12, type: 'hq', image: 'Look Back Mangá.jpg', title: 'Look Back',
      season: 'Finalizado', episodes: '1 Cap.', rating: 9.5,
      genres: ['Drama', 'Slice of Life'], country: 'Japão (Mangá)',
      releaseYear: 2021, author: 'Tatsuki Fujimoto', ageRating: '14+',
      audio: [], alternativeNames: [],
      synopsis: 'Fujino, uma estudante talentosa e confiante em seu talento para desenhar mangás, e Kyomoto, uma colega de classe reclusa que se recusa a sair de casa. Uma história sobre amizade, arte e as complexidades da vida.',
      whereToWatchRead: [
        { platform: 'Manga Plus', options: ['Grátis'] }
      ]
    },
    {
      id: 13, type: 'hq', image: 'Otoyomegatari Mangá.jpg', title: 'A Bride\'s Story',
      season: 'Em Andamento', episodes: '112 Caps.', rating: 9.7,
      genres: ['Histórico', 'Romance', 'Slice of Life', 'Seinen'], country: 'Japão (Mangá)',
      releaseYear: 2008, author: 'Kaoru Mori', ageRating: '14+',
      audio: [], alternativeNames: ["Otoyomegatari"],
      synopsis: 'A história se passa na Ásia Central do século XIX e segue a vida de Amira, uma noiva de 20 anos que se casa com Karluk, um menino de 12 anos de uma vila vizinha. Uma obra aclamada pela sua arte detalhada e representação cultural.',
      whereToWatchRead: [
        { platform: 'Não disponível oficialmente no Brasil', options: [] }
      ]
    },
    {
      id: 14, type: 'hq', image: 'Battle Angel Alita Mangá.jpg', title: 'Battle Angel Alita',
      season: 'Finalizado', episodes: '51 Caps.', rating: 9.3,
      genres: ['Ação', 'Ficção Científica', 'Psicológico', 'Seinen'], country: 'Japão (Mangá)',
      releaseYear: 1990, author: 'Yukito Kishiro', ageRating: '18+',
      audio: [], alternativeNames: ['Gunnm'],
      synopsis: 'Em uma cidade-lixão, o caçador de recompensas Daisuke Ido encontra os restos de uma ciborgue feminina. Ele a reconstrói e a nomeia Alita, mas ela não tem memória de seu passado.',
      whereToWatchRead: [
        { platform: 'JBC', options: ['Impresso'] }
      ]
    },
    {
      id: 15, type: 'hq', image: 'Dragon Ball Mangá.jpg', title: 'Dragon Ball Super',
      season: 'Em Andamento', episodes: '104 Caps.', rating: 8.5,
      genres: ['Ação', 'Aventura', 'Shonen'], country: 'Japão (Mangá)',
      releaseYear: 2015, author: 'Akira Toriyama / Toyotaro', ageRating: 'Livre',
      audio: [], alternativeNames: [],
      synopsis: 'Continuando as aventuras de Goku e seus amigos após a derrota de Majin Buu, a série apresenta novos deuses, universos e inimigos poderosos a serem enfrentados.',
      whereToWatchRead: [
        { platform: 'Manga Plus', options: ['Grátis (últimos capítulos)'] }
      ]
    },
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

  getAllMedia(): Observable<Media[]> {
    return of([...this.animes, ...this.mangas]);
  }
}