import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { UserInteractionService, Comment } from '../../services/user-interaction.service';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent implements OnInit {
  @Input() mediaId!: number;

  isLoggedIn$!: Observable<boolean>;
  comments$!: Observable<Comment[]>;
  
  newCommentText: string = '';
  editingCommentId: number | null = null;
  editedCommentText: string = '';

  constructor(
    private authService: AuthService,
    private userInteractionService: UserInteractionService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.comments$ = this.userInteractionService.getComments(this.mediaId);
  }

  addComment(event: Event) {
    event.preventDefault();

    if (!this.newCommentText.trim()) {
      return;
    }

    const currentProgress = this.userInteractionService.getCurrentProgress(this.mediaId);
    
    const newComment: Omit<Comment, 'id'> = {
      user: 'Você',
      text: this.newCommentText,
      date: new Date(),
      progress: currentProgress
    };
    
    this.userInteractionService.addComment(this.mediaId, newComment);
    this.newCommentText = '';
  }

  enableEditing(comment: Comment): void {
    this.editingCommentId = comment.id;
    this.editedCommentText = comment.text;
  }

  cancelEditing(): void {
    this.editingCommentId = null;
    this.editedCommentText = '';
  }

  saveEdit(comment: Comment): void {
    if (!this.editedCommentText.trim()) {
      return;
    }
    const updatedComment = { ...comment, text: this.editedCommentText };
    this.userInteractionService.editComment(this.mediaId, updatedComment);
    this.cancelEditing();
  }

  deleteComment(commentId: number): void {
    if (confirm('Tem certeza de que deseja excluir este comentário?')) {
      this.userInteractionService.deleteComment(this.mediaId, commentId);
    }
  }
}