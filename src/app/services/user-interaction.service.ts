import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Media, MediaService } from './media.service';

export interface Comment {
  id: number; // Adicionado
  user: string;
  text: string;
  date: Date;
  progress?: string;
}

export interface CommentWithMedia extends Comment {
  media: Media;
  rating?: number;
}


export interface UserMediaInteraction {
  status?: string;
  progress?: string;
  rating?: number;
  comments?: Comment[];
}

export interface AllInteractions {
  [mediaId: string]: UserMediaInteraction;
}

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  private interactions = new BehaviorSubject<AllInteractions>({});
  public interactions$ = this.interactions.asObservable();

  constructor(private mediaService: MediaService) { }

  private getInteraction(mediaId: number | string): UserMediaInteraction {
    const id = mediaId.toString();
    const all = this.interactions.getValue();
    return all[id] ? { ...all[id] } : {};
  }

  private setInteraction(mediaId: number | string, interaction: UserMediaInteraction): void {
    const id = mediaId.toString();
    const all = this.interactions.getValue();
    all[id] = interaction;
    this.interactions.next(all);
  }

  setData(mediaId: number | string, data: Partial<UserMediaInteraction>): void {
    const interaction = this.getInteraction(mediaId);
    const updatedInteraction = { ...interaction, ...data };
    this.setInteraction(mediaId, updatedInteraction);
  }

  getInteractionData(mediaId: number | string): Observable<UserMediaInteraction> {
    const id = mediaId.toString();
    return this.interactions$.pipe(map(interactions => interactions[id] || {}));
  }

  addComment(mediaId: number | string, comment: Omit<Comment, 'id'>): void {
    const interaction = this.getInteraction(mediaId);
    const comments = interaction.comments ? [...interaction.comments] : [];
    const newComment: Comment = {
      ...comment,
      id: new Date().getTime() // Adiciona um ID único
    };
    comments.unshift(newComment);
    this.setData(mediaId, { comments });
  }

  editComment(mediaId: number | string, updatedComment: Comment): void {
    const interaction = this.getInteraction(mediaId);
    if (interaction.comments) {
      const commentIndex = interaction.comments.findIndex(c => c.id === updatedComment.id);
      if (commentIndex > -1) {
        interaction.comments[commentIndex] = updatedComment;
        this.setData(mediaId, { comments: interaction.comments });
      }
    }
  }

  deleteComment(mediaId: number | string, commentId: number): void {
    const interaction = this.getInteraction(mediaId);
    if (interaction.comments) {
      const updatedComments = interaction.comments.filter(c => c.id !== commentId);
      this.setData(mediaId, { comments: updatedComments });
    }
  }


  getComments(mediaId: number | string): Observable<Comment[]> {
    return this.getInteractionData(mediaId).pipe(
      map(interaction => interaction?.comments || [])
    );
  }

  getAllComments(): Observable<CommentWithMedia[]> {
    return combineLatest([
      this.interactions$,
      this.mediaService.getAllMedia()
    ]).pipe(
      map(([interactions, allMedia]) => {
        const allComments: CommentWithMedia[] = [];
        for (const mediaId in interactions) {
          if (interactions[mediaId].comments) {
            const media = allMedia.find(m => m.id.toString() === mediaId);
            if (media) {
              for (const comment of interactions[mediaId].comments!) {
                allComments.push({
                  ...comment,
                  media: media,
                  rating: interactions[mediaId].rating
                });
              }
            }
          }
        }
        return allComments.sort((a, b) => b.date.getTime() - a.date.getTime());
      })
    );
  }
  
  getInteractedMediaIds(): Observable<string[]> {
    return this.interactions$.pipe(
      map(interactions => Object.keys(interactions).filter(id => {
        const interaction = interactions[id];
        return interaction.status || interaction.rating || (interaction.comments && interaction.comments.length > 0);
      }))
    );
  }

  getCurrentProgress(mediaId: string | number): string | undefined {
    return this.interactions.getValue()[mediaId.toString()]?.progress;
  }
}