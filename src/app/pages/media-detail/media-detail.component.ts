import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Media, MediaService } from '../../services/media.service'; 
import { CommentSectionComponent } from '../../components/comment-section/comment-section.component';
import { AuthService } from '../../services/auth.service';
import { UserInteractionService, UserMediaInteraction } from '../../services/user-interaction.service';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media-detail',
  standalone: true,
  imports: [CommonModule, CommentSectionComponent, FormsModule],
  templateUrl: './media-detail.component.html',
  styleUrl: './media-detail.component.css'
})
export class MediaDetailComponent implements OnInit, OnDestroy {
  media: Media | undefined;
  isLoggedIn$!: Observable<boolean>;
  interaction: UserMediaInteraction = {};
  private interactionSubscription?: Subscription;

  animeStatuses = ['Assistindo', 'Pausado', 'Concluído', 'Dropado', 'Favoritar'];
  hqStatuses = ['Lendo', 'Pausado', 'Concluído', 'Dropado', 'Favoritar'];
  
  seasons: number[] = [];
  episodes: number[] = [];
  selectedSeason: number = 1;
  selectedEpisode: number = 1;
  chapterProgress: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediaService: MediaService,
    private authService: AuthService,
    private userInteractionService: UserInteractionService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    const mediaId = this.route.snapshot.paramMap.get('id');

    if (mediaId) {
      this.media = this.mediaService.getMediaById(mediaId);
      if (this.media) {
        if (this.media.type === 'anime') this.generateSeasonEpisodes();
        
        this.interactionSubscription = this.userInteractionService.getInteractionData(this.media.id).subscribe(data => {
          if (data) this.interaction = data;
        });
      }
    }

    if (!this.media) this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.interactionSubscription?.unsubscribe();
  }

  generateSeasonEpisodes(): void {
    if (!this.media) return;
    const seasonMatch = this.media.season.match(/\d+/);
    const seasonCount = seasonMatch ? parseInt(seasonMatch[0], 10) : 1;
    this.seasons = Array.from({ length: seasonCount }, (_, i) => i + 1);

    const episodeMatch = this.media.episodes.match(/\d+/);
    const episodeCount = episodeMatch ? parseInt(episodeMatch[0], 10) : 1;
    this.episodes = Array.from({ length: episodeCount }, (_, i) => i + 1);
  }

  setStatus(status: string): void {
    if (!this.media) return;

    const newStatus = this.interaction.status === status ? undefined : status;
    let progress = this.interaction.progress;

    if (newStatus === 'Concluído') {
      if (this.media.type === 'anime') {
        const lastSeason = this.seasons.slice(-1)[0] || 1;
        const lastEpisode = this.episodes.slice(-1)[0] || 1;
        progress = `Temporada ${lastSeason} - Ep. ${lastEpisode}`;
      } else {
        progress = this.media.episodes; // Ex: "1161 Caps."
      }
    }

    this.userInteractionService.setData(this.media.id, { status: newStatus, progress });
  }

  saveProgress(): void {
    if (!this.media) return;
    let progressString = '';
    if (this.media.type === 'anime') {
      progressString = `Temporada ${this.selectedSeason} - Ep. ${this.selectedEpisode}`;
    } else {
      progressString = `Cap. ${this.chapterProgress}`;
    }
    this.userInteractionService.setData(this.media.id, { progress: progressString });
  }

  saveRating(rating: number): void {
    if (!this.media) return;
    this.userInteractionService.setData(this.media.id, { rating });
  }

  showProgressInput(): boolean {
    const progressStatus = ['Assistindo', 'Lendo', 'Pausado'];
    return !!this.interaction.status && progressStatus.includes(this.interaction.status);
  }
}