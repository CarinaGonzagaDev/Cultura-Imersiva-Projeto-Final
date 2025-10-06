import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // <-- Caminho correto

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cadastro.component.html'
  // A linha styleUrls foi removida
})
export class CadastroComponent {
  constructor(private authService: AuthService) {}

  register(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const passwordInput = form.querySelector('#password') as HTMLInputElement;
    const termsCheckbox = form.querySelector('#terms') as HTMLInputElement;

    if (passwordInput.value.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    if (termsCheckbox.checked) {
      this.authService.login();
    } else {
      alert('Você precisa aceitar os termos de uso para se cadastrar.');
    }
  }
}