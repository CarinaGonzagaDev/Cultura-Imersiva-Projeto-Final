import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-tracker.component.html',
  styleUrl: './status-tracker.component.css'
})
export class StatusTrackerComponent {
  @Input() mediaType: 'anime' | 'hq' = 'anime';

  animeStatuses = ['Assistindo', 'Pausado', 'Dropado', 'Favoritar'];
  hqStatuses = ['Lendo', 'Pausado', 'Favoritar'];
  
  currentStatus: string | null = null;

  setStatus(status: string) {
    if (this.currentStatus === status) {
      this.currentStatus = null; // Clicar de novo desmarca
    } else {
      this.currentStatus = status;
    }
    console.log(`Status alterado para: ${this.currentStatus}`);
  }
}