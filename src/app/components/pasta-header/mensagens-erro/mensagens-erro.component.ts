// Contém a lógica para exibir as mensagens de erro dinamicamente

import { Directive, Input, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appMensagensErro]',
  standalone: true
})
export class MensagensErroDirective implements OnInit, OnDestroy {

  @Input() control!: AbstractControl; // Corrigido: Adicionado o '!'
  private subscription!: Subscription; // Corrigido: Adicionado o '!'

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.control) {
      this.subscription = this.control.valueChanges.subscribe(() => {
        this.updateErrors();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateErrors(): void {
    const parent = this.el.nativeElement.parentNode;

    const existingErrors = parent.querySelectorAll('.erro');
    existingErrors.forEach((errorEl: Element) => this.renderer.removeChild(parent, errorEl)); // Corrigido: 'errorEl' agora tem um tipo explícito

    if (this.control.invalid && (this.control.dirty || this.control.touched)) {
      const errors = this.control.errors;
      if (errors) {
        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            const message = this.getErrorMessage(key);
            const errorElement = this.renderer.createElement('div');
            const text = this.renderer.createText(message);
            this.renderer.appendChild(errorElement, text);
            this.renderer.addClass(errorElement, 'erro');
            this.renderer.appendChild(parent, errorElement);
          }
        }
      }
    }
  }

  private getErrorMessage(errorKey: string): string {
    const errorMessages: { [key: string]: string } = { // Corrigido: Adicionado o índice de assinatura
      required: 'Este campo é obrigatório.',
      email: 'E-mail inválido.',
      minlength: 'O campo deve ter no mínimo 6 caracteres.',
      mismatch: 'Os campos não coincidem.'
    };
    return errorMessages[errorKey] || `Erro de validação: ${errorKey}`;
  }
}