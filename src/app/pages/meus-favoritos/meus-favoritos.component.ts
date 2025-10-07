import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaService, Media } from '../../services/media.service';
import { UserInteractionService } from '../../services/user-interaction.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs'; // 'of' importado
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { MyCommentsComponent } from '../../components/my-comments/my-comments.component';

@Component({
  selector: 'app-meus-favoritos',
  standalone: true,
  imports: [CommonModule, MediaCardComponent, RouterLink, MyCommentsComponent, FormsModule],
  templateUrl: './meus-favoritos.component.html',
  styleUrls: ['./meus-favoritos.component.css', '../anime/anime.component.css']
})
export class MeusFavoritosComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  showComments = false;

  private allInteractedMedia = new BehaviorSubject<Media[]>([]);
  filteredMedia$!: Observable<Media[]>;

  allGenres: string[] = [];
  selectedGenres: { [key: string]: boolean } = {};
  mediaType: 'all' | 'anime' | 'hq' = 'all';
  sortBy: string = 'popularity';

  constructor(
    private mediaService: MediaService,
    private userInteractionService: UserInteractionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    // Busca inicial das mídias com interação
    combineLatest([
      this.userInteractionService.getInteractedMediaIds(),
      this.mediaService.getAllMedia()
    ]).pipe(
      map(([interactedIds, allMedia]) => {
        const interactedIdSet = new Set(interactedIds);
        const interacted = allMedia.filter(media => interactedIdSet.has(media.id.toString()));
        this.allInteractedMedia.next(interacted);
        this.allGenres = [...new Set(interacted.flatMap(m => m.genres))].sort();
      })
    ).subscribe(() => {
      this.applyFilters(); // Aplica os filtros iniciais
    });

    this.filteredMedia$ = this.allInteractedMedia.asObservable();
  }

  applyFilters(): void {
    let result = [...this.allInteractedMedia.getValue()];

    const activeGenres = Object.keys(this.selectedGenres).filter(genre => this.selectedGenres[genre]);
    if (activeGenres.length > 0) {
      result = result.filter(item =>
        activeGenres.every(genre => item.genres.includes(genre))
      );
    }

    if (this.mediaType !== 'all') {
      result = result.filter(item => item.type === this.mediaType);
    }

    if (this.sortBy === 'popularity') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'release') {
      result.sort((a, b) => b.releaseYear - a.releaseYear);
    }
    
    // Atualiza o observable com a lista filtrada
    this.filteredMedia$ = of(result);
  }

  toggleComments(): void {
    this.showComments = !this.showComments;
  }
}