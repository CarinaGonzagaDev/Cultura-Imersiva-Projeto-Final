import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // <-- Caminho correto

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html'
  // A linha styleUrls foi removida
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(event: Event): void {
    event.preventDefault();
    this.authService.login();
  }
}