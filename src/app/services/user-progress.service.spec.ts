import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Comment {
  user: string;
  text: string;
  date: Date;
  progress?: string;
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

  constructor() { }

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

  addComment(mediaId: number | string, comment: Comment): void {
    const interaction = this.getInteraction(mediaId);
    const comments = interaction.comments ? [...interaction.comments] : [];
    comments.unshift(comment);
    this.setData(mediaId, { comments });
  }

  getComments(mediaId: number | string): Observable<Comment[]> {
    return this.getInteractionData(mediaId).pipe(
      map(interaction => interaction?.comments || [])
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