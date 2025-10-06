import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// CORREÇÃO: Importar a classe MediaService e a interface Media
import { MediaService, Media } from '../../components/media.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [CommonModule, MediaCardComponent, FormsModule],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent implements OnInit {
  
  // CORREÇÃO: Usar a interface Media
  private allAnimes: Media[] = [];
  filteredMediaList: Media[] = [];
  allGenres: string[] = [];
  selectedGenres: { [key: string]: boolean } = {};
  sortBy: string = 'popularity';
  status: string = 'all';

  // A injeção do serviço está correta
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.allAnimes = this.mediaService.getAnimes();
    this.allGenres = [...new Set(this.allAnimes.flatMap(a => a.genres))].sort();
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.allAnimes];
    const activeGenres = Object.keys(this.selectedGenres).filter(genre => this.selectedGenres[genre]);

    if (activeGenres.length > 0) {
      result = result.filter(item => 
        activeGenres.every(genre => item.genres.includes(genre))
      );
    }

    if (this.status !== 'all') {
      result = result.filter(item => item.status === this.status);
    }

    if (this.sortBy === 'popularity') {
      result.sort((a, b) => b.rating - a.rating);
    }

    this.filteredMediaList = result;
  }
}