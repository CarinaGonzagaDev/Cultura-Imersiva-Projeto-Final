import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe para usar ngModel

interface Comment {
  user: string;
  rating: number;
  text: string;
  date: Date;
}

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione FormsModule
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent {
  comments: Comment[] = [
    { user: 'Visitante_1', rating: 9, text: 'Obra incrível, arte fantástica!', date: new Date() }
  ];

  newCommentText: string = '';
  newCommentRating: number = 10;
  showComments = true;

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

    // Limpa os campos do formulário
    this.newCommentText = '';
    this.newCommentRating = 10;
  }
}