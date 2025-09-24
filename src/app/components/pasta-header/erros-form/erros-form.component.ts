// erros-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule aqui
import { MensagensErroDirective } from '../mensagens-erro/mensagens-erro.component';

@Component({
  selector: 'app-erros-form',
  standalone: true,
  imports: [ReactiveFormsModule, MensagensErroDirective],
  templateUrl: './erros-form.component.html',
  styleUrls: ['./erros-form.component.css']
})
export class ErrosFormComponent implements OnInit {

  form!: FormGroup;
  mostrarSenha = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]]
    }, {
      validators: [this.camposCorrespondem('email', 'confirmarEmail'), this.camposCorrespondem('senha', 'confirmarSenha')]
    });
  }

  camposCorrespondem(campo1: string, campo2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const controle1 = formGroup.get(campo1);
      const controle2 = formGroup.get(campo2);
      if (!controle1 || !controle2) {
        return null;
      }
      if (controle1.value !== controle2.value) {
        controle2.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        if (controle2.hasError('mismatch')) {
          controle2.setErrors(null);
        }
        return null;
      }
    };
  }

  alternarVisibilidadeSenha(): void {
    this.mostrarSenha = !this.mostrarSenha;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulário enviado!', this.form.value);
    } else {
      console.log('O formulário contém erros.');
    }
  }
}