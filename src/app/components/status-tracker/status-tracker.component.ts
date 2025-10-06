// Atualizado: src/app/components/status-tracker/status-tracker.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-tracker.component.html',
  styleUrl: './status-tracker.component.css'
})
export class StatusTrackerComponent implements OnInit {
  @Input() mediaType: 'anime' | 'hq' = 'anime';

  isLoggedIn$!: Observable<boolean>;

  animeStatuses = ['Assistindo', 'Pausado', 'Dropado', 'Favoritar'];
  hqStatuses = ['Lendo', 'Pausado', 'Favoritar'];
  
  currentStatus: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  setStatus(status: string) {
    if (this.currentStatus === status) {
      this.currentStatus = null; 
    } else {
      this.currentStatus = status;
    }
    console.log(`Status alterado para: ${this.currentStatus}`);
  }
}