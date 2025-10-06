// NOVO ARQUIVO: src/app/services/user-progress.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Progress {
  [mediaId: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserProgressService {
  private progress = new BehaviorSubject<Progress>({});

  constructor() { }

  setProgress(mediaId: string | number, progress: string): void {
    const currentProgress = this.progress.getValue();
    currentProgress[mediaId.toString()] = progress;
    this.progress.next(currentProgress);
  }

  getCurrentProgress(mediaId: string | number): string | undefined {
    return this.progress.getValue()[mediaId.toString()];
  }
}