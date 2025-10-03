import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaService, CarouselItem } from '../../services/media.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';

@Component({
  selector: 'app-hqs',
  standalone: true,
  imports: [CommonModule, MediaCardComponent, FormsModule],
  templateUrl: './hqs.component.html',
  styleUrl: '../anime/anime.component.css'
})
export class HqsComponent implements OnInit {

  private allMangas: CarouselItem[] = [];
  filteredMediaList: CarouselItem[] = [];
  allGenres: string[] = [];
  
  // Lista de países para o filtro
  countries = ["Todos", "Japão (Mangá)", "Coreia do Sul (Manhwa)", "China (Manhua)", "Brasil (Quadrinho)", "EUA (Comic)"];

  selectedGenres: { [key: string]: boolean } = {};
  status: string = 'all';
  country: string = 'Todos'; // Novo filtro de país
  sortBy: string = 'popularity'; // Novo filtro de popularidade

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.allMangas = this.mediaService.getMangas();
    this.allGenres = [...new Set(this.allMangas.flatMap(m => m.genres))].sort();
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.allMangas];
    const activeGenres = Object.keys(this.selectedGenres).filter(genre => this.selectedGenres[genre]);

    // Filtro de Gênero
    if (activeGenres.length > 0) {
      result = result.filter(item => 
        activeGenres.every(genre => item.genres.includes(genre))
      );
    }

    // Filtro de Status
    if (this.status !== 'all') {
      result = result.filter(item => item.season === this.status);
    }

    // Filtro de País
    if (this.country !== 'Todos') {
      result = result.filter(item => item.country === this.country);
    }
    
    // Ordenação
    if (this.sortBy === 'popularity') {
      result.sort((a, b) => b.rating - a.rating);
    }

    this.filteredMediaList = result;
  }
}