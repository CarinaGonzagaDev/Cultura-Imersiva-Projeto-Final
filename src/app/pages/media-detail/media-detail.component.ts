import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Importe para pegar o ID da URL
import { Media, MediaService } from '../../components/media.service';

// Importe os novos componentes de interação
import { StatusTrackerComponent } from '../../components/status-tracker/status-tracker.component';
import { CommentSectionComponent } from '../../components/comment-section/comment-section.component';

@Component({
  selector: 'app-media-detail',
  standalone: true,
  imports: [CommonModule, StatusTrackerComponent, CommentSectionComponent],
  templateUrl: './media-detail.component.html',
  styleUrl: './media-detail.component.css'
})
export class MediaDetailComponent implements OnInit {

  media: Media | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    // Pega o parâmetro 'id' da URL
    const mediaId = this.route.snapshot.paramMap.get('id');

    if (mediaId) {
      // Busca a obra no serviço usando o ID
      this.media = this.mediaService.getMediaById(mediaId);
    }

    // Se a obra não for encontrada, redireciona para a home
    if (!this.media) {
      this.router.navigate(['/home']);
    }
  }
}