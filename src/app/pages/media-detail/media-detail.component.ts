import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// CORREÇÃO: O caminho correto para o serviço
import { Media, MediaService } from '../../services/media.service'; 
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
    const mediaId = this.route.snapshot.paramMap.get('id');

    if (mediaId) {
      this.media = this.mediaService.getMediaById(mediaId);
    }

    if (!this.media) {
      this.router.navigate(['/home']);
    }
  }
}