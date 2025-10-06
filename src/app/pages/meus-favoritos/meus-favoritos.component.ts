import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaService, Media } from '../../services/media.service';
import { UserInteractionService } from '../../services/user-interaction.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meus-favoritos',
  standalone: true,
  imports: [CommonModule, MediaCardComponent, RouterLink],
  templateUrl: './meus-favoritos.component.html',
  styleUrl: './meus-favoritos.component.css'
})
export class MeusFavoritosComponent implements OnInit {
  interactedMedia$!: Observable<Media[]>;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private mediaService: MediaService,
    private userInteractionService: UserInteractionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.interactedMedia$ = combineLatest([
      this.userInteractionService.getInteractedMediaIds(),
      this.mediaService.getAllMedia()
    ]).pipe(
      map(([interactedIds, allMedia]) => {
        const interactedIdSet = new Set(interactedIds);
        return allMedia.filter(media => interactedIdSet.has(media.id.toString()));
      })
    );
  }
}