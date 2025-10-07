import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInteractionService, CommentWithMedia } from '../../services/user-interaction.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-comments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-comments.component.html',
  styleUrl: './my-comments.component.css'
})
export class MyCommentsComponent implements OnInit {
  comments$!: Observable<CommentWithMedia[]>;

  constructor(private userInteractionService: UserInteractionService) {}

  ngOnInit(): void {
    this.comments$ = this.userInteractionService.getAllComments();
  }
}