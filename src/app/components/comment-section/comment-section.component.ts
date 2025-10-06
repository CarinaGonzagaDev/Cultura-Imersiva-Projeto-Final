// Atualizado: src/app/components/comment-section/comment-section.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

interface Comment {
  user: string;
  rating: number;
  text: string;
  date: Date;
}

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  
  comments: Comment[] = [
    { user: 'Visitante_1', rating: 9, text: 'Obra incrível, arte fantástica!', date: new Date() }
  ];

  newCommentText: string = '';
  newCommentRating: number = 10;
  showComments = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  addComment() {
    if (!this.newCommentText || this.newCommentRating < 1 || this.newCommentRating > 10) {
      return;
    }
    
    this.comments.unshift({
      user: `Visitante_${this.comments.length + 1}`,
      rating: this.newCommentRating,
      text: this.newCommentText,
      date: new Date()
    });

    this.newCommentText = '';
    this.newCommentRating = 10;
  }
}